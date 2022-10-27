import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { EditPersons } from "../../redux/actions/getValues";
import { InitioalValue } from "../../utils/editpersonValue";
import {
  SelectInput,
  RadioButtons,
  ValidateSchema,
  FormField,
  Navbar,
} from "../../components/index";
import { SelectOptions } from "../../utils/selectOptions";
import { radioOptions } from "../../utils/radioOptions";

const EditPerson = () => {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(EditPersons(values));
    history.replace("/home");
  };

  return (
    <>
      <Navbar />
      <Formik
        initialValues={InitioalValue()}
        validationSchema={ValidateSchema}
        onSubmit={handleSubmit}
      >
        <Form>
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
            <RadioButtons
              label="جنسیت خود را انتخاب کنید"
              name="gender"
              options={radioOptions}
            />
            <FormField
              name="age"
              label="سن"
              id="age"
              type="number"
              placeholder="سن"
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
              lable="پسورد"
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
            <div className="registerError"></div>
            <div className="r-btn">
              <button className="register-btn">ویرایش</button>
            </div>
            <div className="backLogin">
              <p>
                برای برگشت به جدول{" "}
                <span>
                  <Link to="/">اینجا</Link>
                </span>{" "}
                کلیک کنید
              </p>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default EditPerson;
