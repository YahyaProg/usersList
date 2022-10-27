export const LoginInfo = (validPerson) => {
  console.log(validPerson);

  return async (dispatch, getState) => {
    const loginInfo = {
      role: validPerson.role ? validPerson.role : "user",
      firstName: validPerson.firstName,
      isLogin: true,
    };
    console.log(loginInfo);
    await dispatch({ type: "LOGIN_INFO", payload: loginInfo });
  };
};
export const ResetLoginInfo = () => {
  return async (dispatch, getState) => {
    await dispatch({
      type: "RESET_LOGIN",
      payload: {
        role: "",
        firstName: "",
        isLogin: false,
      },
    });
  };
};


export const LocalLoginInfo = () => {
  return async (dispatch, getState) => {
    const login = localStorage.getItem("login_info");
    if (login) {
      await dispatch({
        type: "LOCAL_LOGIN",
        payload: { ...JSON.parse(login) },
      });
    }
  };
};
