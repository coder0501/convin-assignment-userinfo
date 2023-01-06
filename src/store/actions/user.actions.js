import ACTIONS from "./types.actions";

export function setDisplay(data) {
    return { type: ACTIONS.SET_DISPLAY, data };
};

export function setUserData(data) {
    return { type: ACTIONS.GET_USER_DATA, data };
};

export function getUserInfo(data) {
    return { type: ACTIONS.GET_USER_INFO, data };
}
export function getAllUserData(data) {
    return async dispatch => {
        dispatch(setDisplay(true));
        dispatch(setUserData([]));
        fetch("https://reqres.in/api/users?1").then(res => {
            res.json().then(r => {
                dispatch(setUserData(r.data));
                dispatch(setDisplay(false));
            })
        });
    };
}

export function getSingleUserData(data) {
    return async dispatch => {
        dispatch(setDisplay(true));
        // dispatch(getUserInfo([]))
        fetch("https://reqres.in/api/users/" + data).then(res => {
            res.json().then(r => {
                dispatch(getUserInfo(r.data));
                dispatch(setDisplay(false));
            })
        });
    };
}


