const userAction = {
  userLogin: (user) => ({
    type: appConstants.USER_LOGIN,
    payload: user,
  }),
  userLogout: () => ({ type: appConstants.USER_LOGOUT, api: "/logout" }),
};
