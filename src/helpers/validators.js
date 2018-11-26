export const validateRequired = (value) => {
  return !value ? 'field is required' : null;
}

export const validateEmail = (value) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase()) ? null : 'field is invalid';
}

export const validateEqualPasswords = (value, values) => {
  return values.password !== values.confirmPassword ? 'field must match' : null;
};

export const combineValidators = validations => (value, values) => {
  for (const validate of validations) {
    if (validate(value, values)) return validate(value, values);
  }
  return null;
}