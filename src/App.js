import _isEmpty from "lodash/isEmpty";
import { Card, Spin, Button } from 'antd';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllUserData, getSingleUserData,
} from "./store/actions/user.actions";

import logo from './logo.svg';
import './App.css';

const { Meta } = Card;

function App() {

  const dispatch = useDispatch();
  const { userData, userInfo, display } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUserData());
  }, []);

  const handleSubmit = (e) => {
    dispatch(getSingleUserData(e.target.id ? e.target.id : e.target.parentNode.id));
    e.preventDefault()
  };

  return (
    <>
      <div className="App">
      <Spin className={display == true ? 'block' : 'none'} />
        <div>
          {!_isEmpty(userInfo) ?
            <Card
              hoverable
              style={{
                width: 240,
              }}
              className="center"
              cover={<img alt="example" src={userInfo.avatar} />}
            >
              <Meta title={`${userInfo.first_name} ${userInfo.last_name}`} />
              <Meta title={userInfo.email} />
            </Card>

            :
            <Card
              style={{
                width: 300,
                justifyContent: 'center',
              }}
              className="center"
            >
              <p>Please click on Name to view details</p>
            </Card>
          }
        </div>
        {!_isEmpty(userData) ?
          <form onClick={(e) => handleSubmit(e)}>
            {userData.map((e, i) => {
              return (
                <Button id={e.id} key={`user-info-${i}`} className="ml" type="primary">{e.first_name}{' '}{e.last_name}</Button>
              )
            })}
          </form>
          : ''}
      </div>
    </>
  );
}

export default App;
