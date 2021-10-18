import { createStore } from "redux";
import reducer from './Reducer/Auth';

function createStore() {
    return createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
}

export default createStore;