export const GOTO_STEP = 'GOTO_STEP';

export const initialState = {
  currentStepId: 0,
  steps: [
    {
      id: 0,
      name: 'PASSWORD',
    },
    {
      id: 1,
      name: 'USERDATA',
    },
    {
      id: 2,
      name: 'THANK',
    },
  ],
};
