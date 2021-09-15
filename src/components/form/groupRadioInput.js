import React, { memo } from 'react';
import { Field } from 'redux-form';

const GroupRadioInput = (props) => {
  const { label, name, values } = props;
  return (
    <>
      <label className={"input-label input-group-label"}>
        {label}
      </label>
      <div className="input-group input-group-radio">
        {values.map(value => (
          <label className="input-group-radio__label" key={value}>
            <Field name={name} component="input" type="radio" value={value} />
            {value}
          </label>
        ))}
      </div>
    </>
  );
};

export default memo(GroupRadioInput);
