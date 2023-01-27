import { combineReducers, createStore } from "redux";
import { hookReducer } from "./reducers/hookReducer";
const rootReducer = combineReducers({
  hookReducer,
});
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
