import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { radioOptions } from "../../utils/radioOptions";
import { RegisterinitioalValues } from "../../utils/registervalues";
import "./register.css";
import {
  SelectInput,
  RadioButtons,
  Recaptcha,
  RegisterValidate,
  ValidateSchema,
  FormField,
} from "../../components/index";
import { SelectOptions } from "../../utils/selectOptions";
import { AddUser } from "../../redux/actions/getValues";
const Register = () => {
  const state = useSelector((state) => state.Values);
  const dispatch = useDispatch();

  const [Message, setMessage] = useState();
  const [validPerson, setValidPerson] = useState();

  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(state));
  }, [state]);
  const onSubmit = (values) => {
    const messages = RegisterValidate(state, values);
    if (messages) {
      setMessage(messages);
    } else {
      dispatch({ type: "SHOW_CAPTCHA" });
      dispatch(AddUser(values));
      setValidPerson(values);
    }
  };

  return (
    <>
      <Recaptcha validPerson={[validPerson]} />
      <Formik
        initialValues={RegisterinitioalValues}
        validationSchema={ValidateSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <section className="form">
            <div className="form-container">
              <div className="title-register">
                <span>*</span>
                <h5>اطلاعات فردی</h5>
              </div>
              <FormField
                name="firstName"
                label="نام"
                id="firstName"
                type="text"
                placeholder="نام"
              />
              <FormField
                name="lastName"
                label="نام خانوادگی"
                id="lastName"
                type="text"
                placeholder="نام خانوادگی"
              />
              <FormField
                name="age"
                label="سن"
                id="age"
                type="number"
                placeholder="سن"
              />
              <RadioButtons
                label="جنسیت خود را انتخاب کنید"
                name="gender"
                options={radioOptions}
              />
              <SelectInput
                lable="انتخاب شهر:"
                name="city"
                options={SelectOptions}
              />
              <div className="title-register">
                <span>*</span>
                <h5>راه های ارتباطی</h5>
              </div>
              <FormField
                name="email"
                label="ایمیل"
                id="email"
                type="email"
                placeholder="ایمیل"
              />

              <FormField
                name="phNumber"
                label="شماره همراه"
                id="phNumber"
                type="text"
                placeholder="شماره تلفن همراه"
                dir="ltr"
              />
              <div className="title-register">
                <span>*</span>
                <h5> امنیت</h5>
              </div>
              <FormField
                name="password"
                label="پسورد"
                id="password"
                type="password"
                placeholder=""
                dir="ltr"
              />
              <FormField
                name="confirmPassword"
                label="اعتبار سنجی پسورد"
                id="confirmPassword"
                type="password"
                placeholder=""
                dir="ltr"
              />
              <div className="registerError">
                <p>{Message}</p>
              </div>
              <div className="r-btn">
                <button className="register-btn">ثبت نام</button>
              </div>
              <div className="backLogin">
                <p>
                  برای برگشت به صفحه ورود{" "}
                  <span>
                    <Link to="/">اینجا</Link>
                  </span>{" "}
                  کلیک کنید
                </p>
              </div>
            </div>
          </section>
        </Form>
      </Formik>
    </>
  );
};
export default Register;
