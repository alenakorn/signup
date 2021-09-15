import React, { memo } from 'react';

const SelectContainer = ({ input, children, label }) => (
  <>
    <label className="input-label input-group-label">
      {label}
    </label>
    <select {...input} className="select">
      {children}
    </select>
  </>
);

export default memo(SelectContainer);
