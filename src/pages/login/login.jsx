import React, { useState } from "react";
import "./login.css";
import { Recaptcha } from "../../components/index";
import { Link } from "react-router-dom";
import { validatioanSchema } from "../../utils/loginValidate";
import { Form, Formik, Field, ErrorMessage } from "formik";
import logo from "../../assets/main.webp";
import { useSelector, useDispatch } from "react-redux";
import { LoginInfo } from "../../redux/actions/loginInfo";

const Login = () => {
  const [message, setMessage] = useState("");
  const persons = useSelector((state) => state.Values);
  const [validPerson, setValidPerson] = useState();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const onsubmit = (values) => {
    const validPerson = persons.filter((person) => {
      return (
        person.email === values.email && person.password === values.password
      );
    });
    if (validPerson[0]) {
      dispatch(LoginInfo(validPerson[0]));
      setValidPerson(validPerson);
      dispatch({ type: "SHOW_CAPTCHA" });
    } else if (
      values.email === "admin@gmail.com" &&
      values.password === "1213@Admin"
    ) {
      setValidPerson([
        {
          role: "admin",
          firstName: "کاربر",
        },
      ]);
      dispatch({ type: "SHOW_CAPTCHA" });
    } else {
      setMessage("ایمیل یا پسورد وارد شده اشتباه است");
    }
  };
  console.log(message);
  return (
    <div className="log">
      <Recaptcha validPerson={validPerson} />
      <div className="login d-flex">
        <section className="login-contaner">
          <div className="logo-login">
            <img src={logo} alt="" />
          </div>
          <div className="login-form">
            <Formik
              validationSchema={validatioanSchema}
              initialValues={initialValues}
              onSubmit={onsubmit}
            >
              <Form>
                <div className="form-item">
                  <div className="lable">
                    <label htmlFor="email">ایمیل</label>
                  </div>
                  <div className="field">
                    <Field
                      placeholder="ایمیل خود را وارد کنید"
                      type="email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <ErrorMessage name="email">
                    {(errorMessage) => (
                      <div className="errormessage">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="form-item">
                  <div className="lable">
                    <label htmlFor="password">پسورد</label>
                  </div>
                  <div className="field">
                    <Field
                      placeholder="پسورد خود را وارد کنید"
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                  <ErrorMessage name="password">
                    {(errorMessage) => (
                      <div className="errormessage">{errorMessage}</div>
                    )}
                  </ErrorMessage>
                </div>
                <button className="login-btn">ورود</button>
                <div className="error-login-message">
                  <p>{message}</p>
                </div>
              </Form>
            </Formik>
          </div>
          <h5>
            برای ثبت نام <Link to="/register">اینجا</Link> کلیک کنید
          </h5>
        </section>
      </div>
    </div>
  );
};

export default Login;
