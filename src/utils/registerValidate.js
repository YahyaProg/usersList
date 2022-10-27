export const RegisterValidate = (Persons, values) => {
  console.log(Persons);
  console.log(values);
  const phNumber = Persons.filter((person) => {
    return person.phNumber === values.phNumber;
  });

  const email = Persons.filter((person) => {
    return person.email === values.email;
  });
  console.log(phNumber);
  console.log(email);
  if (!phNumber[0] && !email[0]) return null;
  if (phNumber[0]) return "با این شماره ثبت نام انجام شده است";
  if (email[0]) return "با این ادرس ایمیل ثبت نام انجام شده است";
};
