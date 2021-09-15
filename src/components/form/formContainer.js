import React from 'react';
import { reduxForm } from 'redux-form';

export const FormContainer = ({ children }) => (
  <form className="container">
    {children}
  </form>
);

export default reduxForm({
  form: 'registrationForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormContainer);
