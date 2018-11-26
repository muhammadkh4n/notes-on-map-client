import React from 'react';
import {
  asField
} from 'informed';
import {
  TextField as Field,
  withStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';

const TextField = asField(({ fieldApi, fieldState, ...props }) => {
  const { classes, type, label } = props;
  const { setValue, onChange, setTouched, onBlur } = fieldApi;
  const { value } = fieldState;

  return (
    <Field
      error={Boolean(fieldState.error)}
      type={type}
      label={fieldState.error ?
        `${label} ${fieldState.error}` : label}
      className={classes.textField}
      value={value || ''}
      onChange={e => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      }}
      onBlur={e => {
        setTouched();
        if (onBlur) {
          onBlur(e);
        }
      }}
      margin="normal"
      variant="outlined"
    />
  );
});

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default withStyles(styles)(TextField);