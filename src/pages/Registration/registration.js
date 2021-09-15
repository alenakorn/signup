import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectRegisterData } from '../../store/selectors';

import ThankStep from './steps/thankStep';
import PasswordStep from './steps/passwordStep';
import UserDataStep from './steps/userDataStep';

const Registration = () => {
  const { currentStepId } = useSelector(selectRegisterData());
  const steps = [
    <PasswordStep />,
    <UserDataStep />,
    <ThankStep />,
  ];
  return <>{steps[currentStepId]}</>;
};

export default memo(Registration);
