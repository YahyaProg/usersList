export const LofinInfo = (
  state = {
    role: "",
    firstName: "",
    isLogin: false,
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_INFO":
      return action.payload;
    case "RESET_LOGIN":
      return action.payload;
    case "LOCAL_LOGIN":
      return action.payload;
    default:
      return state;
  }
};
