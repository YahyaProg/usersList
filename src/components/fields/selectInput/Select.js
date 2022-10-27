import { Field, ErrorMessage } from "formik";

const SelectInput = (props) => {
  const { lable, value, change, name, options, ...rest } = props;
  return (
    <div className="form-select-field">
      <div className="form-field-container">
        <label htmlFor={name}>{lable}</label>
        <Field
          className="select-field"
          as="select"
          id={name}
          name={name}
          {...rest}
        >
          {options.map((option) => {
            return (
              <option className="op" key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name={name}>
          {(errorMessage) => {
            return <div className="errormessages">{errorMessage}</div>;
          }}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default SelectInput;
