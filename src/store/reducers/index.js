import ACTIONS from "../actions/types.actions";
import appInitialState from "../app-state/app-initial.state";
import user from "./user.reducer";

export default function reducer(state = appInitialState, action) {
    if(action.type === ACTIONS.APP_RESET) {
        return appInitialState;
    }

    return {
        user: user(state.user, action),
    }
};