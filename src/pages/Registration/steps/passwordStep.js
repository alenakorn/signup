import React, { memo } from 'react';
import { Field } from 'redux-form';

import { minLengthPassword, required, validateEmail, validateMatchPassword } from '../validation';
import { Input } from '../../../components/form/input';

const PasswordStep = () => (
  <>
    <Field
      name="email"
      type="email"
      component={Input}
      label="Email"
      validate={[required, validateEmail]}
    />
    <Field
      name="password"
      type="password"
      component={Input}
      label="Password"
      validate={[required, minLengthPassword]}
    />
    <Field
      name="confirmPassword"
      type="password"
      component={Input}
      label="Confirm Password"
      validate={[required, minLengthPassword, validateMatchPassword]}
    />
  </>
);

export default memo(PasswordStep);
