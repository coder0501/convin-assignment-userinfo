import { produce } from "immer";
import ACTIONS from "../actions/types.actions";

const user = produce((draft, action) => {
    switch (action.type) {
        case ACTIONS.GET_USER_DATA:
            draft.userData = action.data;
            return draft;
        case ACTIONS.GET_USER_INFO:
            draft.userInfo = action.data;
            return draft;
        case ACTIONS.SET_DISPLAY:
            draft.display = action.data;
            return draft;
        default:
            return draft;
    }
});

export default user;