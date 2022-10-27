import { useSelector } from "react-redux";
export const InitioalValue = () => {
  const editPerson = useSelector((state) => state.editPerson);
  const initialValues = {
    id: editPerson.id,
    firstName: editPerson.firstName,
    lastName: editPerson.lastName,
    email: editPerson.email,
    age: editPerson.age,
    city: editPerson.city,
    gender: editPerson.gender,
    phNumber: editPerson.phNumber,
    password: editPerson.password,
    confirmPassword: editPerson.password,
  };
  return initialValues;
};
