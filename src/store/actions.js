import { GOTO_STEP } from './initial';

export const gotoNextStep = stepId => ({ type: GOTO_STEP, stepId });
