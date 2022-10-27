import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { initioalPersons } from "../actions/getValues";
import { LocalLoginInfo } from "../actions/loginInfo";
import thunk from "redux-thunk";
import { Reducers } from "../reducers/index";
export const store = createStore(
  Reducers,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);
store.dispatch(initioalPersons());
store.dispatch(LocalLoginInfo());
store.subscribe(() => console.log(store.getState()));
