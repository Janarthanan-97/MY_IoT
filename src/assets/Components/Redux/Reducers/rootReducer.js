import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../Reducers/userReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
