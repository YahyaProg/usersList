import React from "react";
import { LoginInfo } from "../../redux/actions/loginInfo";
import ReCAPTCHA from "react-google-recaptcha";
import "./recaptcha.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Reacaptcha = ({ validPerson }) => {
  console.log(validPerson);
  const dispatch = useDispatch();
  const history = useHistory();
  const { show } = useSelector((state) => state.ShowCaptcha);
  console.log(show);
  const onChange = (values) => {
    if (values) {
      dispatch({ type: "HIDE_CAPTCHA" });
      dispatch(LoginInfo(validPerson[0]));
      history.replace("/home");
      dispatch({ type: "RESET_CAOTCH" });
    }
  };
  return (
    <div className={!show ? "recaptcha" : "recaptcha d-flex"}>
      <ReCAPTCHA
        sitekey=" 6LdjdLAiAAAAANMwEciC2Mp5GWTnJ3XXiAGjXr-q"
      
        onChange={onChange}
      />
    </div>
  );
};

export default Reacaptcha;
