import React from "react";
import { Field, ErrorMessage } from "formik";
const FormField = ({ name, label, id, type, placeholder, dir }) => {
  return (
    <div className="form-field">
      <div className="form-field-container">
        <label htmlFor="lastName">{label}:</label>
        <div className="field-container">
          {dir === "ltr" ? (
            <div className="field-number">
              <Field
                placeholder={placeholder}
                name={name}
                id={id}
                type={type}
              />
            </div>
          ) : (
            <Field placeholder={placeholder} name={name} id={id} type={type} />
          )}
        </div>
        <ErrorMessage name={name}>
          {(errorMessage) => (
            <div className="errormessages">{errorMessage}</div>
          )}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default FormField;
