import React from 'react';

const GroupInput = (fields) => {
  const fieldsMetaArr = fields?.names.map(field => fields[field].meta);
  const fieldWithError = fieldsMetaArr.filter(x => x.touched && x.error);
  const hasError = fieldWithError?.length > 0;
  const errorText = fieldsMetaArr.filter(x => x.error);

  return (
    <>
      <label className={`input-label ${hasError && 'input-label__error'} input-group-label`}>
        {fields.label} {hasError && errorText[0].error}
      </label>
      <div className="input-group">
        <div className="input-row">
          <input{...fields.day.input} placeholder="DD" type="text" className="input"/>
        </div>
        <div className="input-row">
          <input {...fields.month.input} placeholder="MM" type="text" className="input" />
        </div>
        <div className="input-row">
          <input {...fields.year.input} placeholder="YYYY" type="text" className="input" />
        </div>
      </div>
    </>
  );
};

export default GroupInput;
