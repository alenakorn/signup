import React, { memo } from 'react';
import { Field, Fields } from 'redux-form';

import { required, validateDay, validateMonth, validateYear, onlyNumber } from '../validation';
import GroupInput from '../../../components/form/groupInput';
import GroupRadioInput from '../../../components/form/groupRadioInput';
import SelectContainer from '../../../components/form/selectContainer';

const UserDataStep = () => (
  <>
    <Fields
      names={['day', 'month', 'year']}
      component={GroupInput}
      validate={{
        day: [validateDay, required, onlyNumber],
        month: [validateMonth, required, onlyNumber],
        year: [validateYear, required, onlyNumber],
      }}
      label="Date of birth"
    />
    <GroupRadioInput
      label="Gender"
      name="gender"
      values={['male', 'female', 'unspecified']}
    />
    <Field name="howHearAboutUs" component={SelectContainer} label="Where did you heard about us?">
      <option/>
      <option value="Nohow">Nohow</option>
      <option value="Anyway">Anyway</option>
      <option value="By no means">By no means</option>
    </Field>
  </>
);

export default memo(UserDataStep);
