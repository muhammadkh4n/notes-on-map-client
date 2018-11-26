export const validateRequired = (value) => {
  return !value ? 'field is required' : null;
}

export const validateEmail = (value) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase()) ? null : 'field is invalid';
}

export const combineValidators = validations => value => {
  for (const validate of validations) {
    if (validate(value)) return validate(value);
  }
  return null;
}