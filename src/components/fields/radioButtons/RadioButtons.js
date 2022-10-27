import React from "react";
import { Field, ErrorMessage } from "formik";
const RadioButtons = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="radiobuttons">
      <div className="radio-buttons-container">
        <label htmlFor="">{label}</label>
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <span htmlFor={option.value}>{option.key}</span>
                </React.Fragment>
              );
            });
          }}
        </Field>
        <ErrorMessage name={name}>
          {(errorMessage) => (
            <div className="errormessages">{errorMessage}</div>
          )}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default RadioButtons;
