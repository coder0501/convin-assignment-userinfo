import { createStore, applyMiddleware, compose} from "redux";
import { Provider} from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducers/index";

function configurestore() {

    let enhancer = {};
    const middleware = [];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, ...middleware));

    const store = createStore(reducer, enhancer);

    return {
        store,
        Provider
    };
}

export default configurestore;