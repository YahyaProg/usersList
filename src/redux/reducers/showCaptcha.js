export const ShowCaptchaReducer = (
  state = { show: false, accept: false },
  action
) => {
  switch (action.type) {
    case "SHOW_CAPTCHA":
      return { show: true, accept: false };
    case "HIDE_CAPTCHA":
      return { show: false, accept: true };
    case "RESET_CAOTCH":
      return { show: false, accept: false };
    default:
      return state;
  }
};
