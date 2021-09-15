const MIN_LENGTH_PASSWORD = 6;

export const minLength = min => value => value?.length < min ? `must be ${min} characters or more` : undefined;

export const minLengthPassword = minLength(MIN_LENGTH_PASSWORD);

export const required = value => value ? undefined : 'is required';

export const onlyNumber = value => value && isNaN(Number(value)) ? 'must be a number' : undefined;

export const validateEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'is invalid' : undefined;

export const validateMatchPassword = (value, allValues) =>  value !== allValues.password ? 'don\'t match' : undefined;

export const validateDay = value => value && (value < 1 || value > 31) ? 'has invalid DD' : undefined;

export const validateMonth = value => value && (value < 1 || value > 12) ? 'has invalid MM' : undefined;

export const validateYear = value => {
  if (!value) return undefined;
  const currentYear = new Date().getFullYear();

  if (currentYear - value < 18) {
    return 'must be 18 year old or more';
  }
};
