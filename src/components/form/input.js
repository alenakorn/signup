import React from 'react';

export const Input = ({ input, label, type, meta: { touched, error }, placeholder }) => {
  const hasError = touched && error;
  return (
    <div className="input-wrap">
      <label className={`input-label ${hasError && 'input-label__error'}`}>
        {label} {hasError && error}
      </label>
      <div>
        <input {...input} placeholder={placeholder} type={type} className="input" />
      </div>
    </div>
  );
};
