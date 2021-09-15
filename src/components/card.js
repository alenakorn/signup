import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gotoNextStep } from '../store/actions';
import { selectForm, selectRegisterData } from '../store/selectors';
import Button from './button';
import ProgressBar from './progressBar';

const Card = ({ children, cardTitle }) => {
  const dispatch = useDispatch();
  const { currentStepId } = useSelector(selectRegisterData());
  const { registrationForm } = useSelector(selectForm());

  const stepButtonClick = (stepId) => {
    dispatch(gotoNextStep(stepId));
  }

  const showDataClick = (e) => {
    e.preventDefault();
    const { email, password, day, month, year, gender, howHearAboutUs } = registrationForm?.values;
    const user_data = {
      email,
      gender,
      password,
      date_of_birth: new Date(`${month}/${day}/${year}`).getTime(),
      how_hear_about_us: howHearAboutUs,
    }
    const data = {user_data}
    console.log(data);
  }

  return (
    <div className="card">
      <h1 className="card-title">{currentStepId === 2 ? 'Thank you!' : cardTitle}</h1>
      <ProgressBar />
      <div className="card-content">
        {children}
      </div>
      <div className="card-footer">
        <Button
          type="button"
          visualClass="back"
          isShown={currentStepId === 1}
          onClick={() => stepButtonClick(currentStepId - 1)}
        >
          Back
        </Button>
        <Button
          type="button"
          visualClass="next"
          isShown={currentStepId !== 2}
          onClick={() => stepButtonClick(currentStepId + 1)}
          disabled={registrationForm?.syncErrors}
        >
          Next &#10142;
        </Button>
        <Button type="submit" visualClass="goto" isShown={currentStepId === 2} onClick={showDataClick}>
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Card;
