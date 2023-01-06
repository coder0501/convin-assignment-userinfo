import mapValues from "lodash/mapValues";

const ACTIONS = {
    APP_RESET: null,

    GET_USER_DATA: null,
    GET_USER_INFO: null,
    SET_DISPLAY: null,
};


export default mapValues(ACTIONS, (v, k) => k);