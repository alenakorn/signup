import { GOTO_STEP, initialState } from './initial';

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOTO_STEP: {
      return { ...state, currentStepId: action.stepId };
    }
    default:
      return state;
  }
};
