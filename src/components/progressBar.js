import React from 'react';
import {useSelector} from 'react-redux';
import {selectRegisterData} from '../store/selectors';

const ProgressBar = () => {
  const { currentStepId, steps } = useSelector(selectRegisterData());
  const width = 100 / (steps.length / (currentStepId + 1));
  return (
    <div className="progress-bar">
       <span style={{ width: `${width}%` }} />
    </div>
  );
};

export default ProgressBar;
