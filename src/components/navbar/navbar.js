import logo from "../../assets/main.webp";
import { BiLogOutCircle } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { ResetLoginInfo } from "../../redux/actions/loginInfo";
const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginInfo = useSelector((state) => state.LofinInfo);
  console.log(loginInfo.rol);
  let UserInfo = "";
  if (loginInfo.role === "user") {
    UserInfo = `${loginInfo.firstName}  عزیز شما به عنوان کاربر عادی وارد شدید`;
  } else if (!loginInfo.role) {
    UserInfo = `${loginInfo.firstName}  عزیز شما به عنوان کاربر عادی وارد شدید`;
  } else {
    UserInfo = `${loginInfo.firstName} عزیز شما به عنوان ادمین وارد شدید`;
  }

  const bacToLogin = () => {
    dispatch(ResetLoginInfo());
    const loginInfo = {
      role: "",
      firstName: "",
      isLogin: false,
    };
    localStorage.removeItem("login_info");
    localStorage.setItem("login_info", JSON.stringify(loginInfo));
    history.replace("/");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-person-info">
          <h6>{UserInfo} </h6>
          <div data-toggle="tooltip" data-placement="top" title="خروج">
            <BiLogOutCircle onClick={() => bacToLogin()} />
          </div>
        </div>
        <div className="navbar-brand">
          <h5>صمیم رایانه</h5>
          <img src={logo} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
