import actionTypes from "../../AppMeta/AppConstants/actionTypes";
import appConstants from "../../AppMeta/AppConstants/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        token: action.payload.token,
        ...state,
      };
    case appConstants.USER_LOGOUT:
      return {
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default userReducer;
