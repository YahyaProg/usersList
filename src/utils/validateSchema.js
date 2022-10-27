import * as Yup from "yup";
const phoneRegExp = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/;
const validPersion = /^[\u0600-\u06FF\s]+$/;
export const ValidateSchema = Yup.object({
  firstName: Yup.string()
    .matches(validPersion, "نام را فارسی وارد کنید")
    .required("لطفا نام خود را وارد کنید"),
  lastName: Yup.string()
    .matches(validPersion, "نام خانوادگی را فارسی وارد کنید")
    .required("نام خانوادگی را وارد کنید"),
  email: Yup.string()
    .email("ایمیل وارد شده صحیح نمیباشد")
    .required("پر کردن این فیلد اجباریست"),
  phNumber: Yup.string()
    .matches(phoneRegExp, "شماره وارده صحیح نیست")
    .max(11, "شماره وارد شده صحیح نیست")
    .required("پر کردن این فیلد اجباریست"),
  password: Yup.string()
    .required("لطفا پسورد را وارد کنید")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "پسورد باید شامل حداقل 8 کاراکتر یک عدد یک حرف بزرگ و کوچک لاتین و علامت باشد"
    ),
  confirmPassword: Yup.string()
    .required("این فیلد الزامیست")
    .oneOf([Yup.ref("password")], "پسورد وارد شده صحیح نیست"),
  agree: Yup.boolean().oneOf([true], "اعتبار سنجی موفقیت امیز"),
  gender: Yup.string().required("جنسیت خود را انتخاب کنید"),
  city: Yup.string().required("لطفا شهر خود را انتخاب نمایید"),
  age: Yup.string().required("سن خود را وارد کنید"),
});
