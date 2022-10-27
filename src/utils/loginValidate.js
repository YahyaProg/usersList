import * as Yup from "yup";
export const validatioanSchema = Yup.object({
    email: Yup.string()
      .email("ایمیل وارد شده صحیح نیست")
      .required("لطفا ایمیل را وارد کنید"),
    password: Yup.string().required("پسورد را وارد نمایید!"),
  });