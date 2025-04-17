import actionTypes from "../AppConstants/actionTypes";

const authenticationApi = {
  login: {
    apiPath: "/login",
    method: "post",
    // actionTypes: actionTypes.USER_LOGIN,
  },
  register: {
    apiPath: "/register",
    method: "post",
  },
};

export default authenticationApi;
