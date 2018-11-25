import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './styles';
import baseStyles from '../../styles';

const Auth = props => {
  const { classes } = props;
  return (
    <div className={classes.root} id="auth">
      <Link to="/login" className={classes.link}>
        <Button color="inherit">Login</Button>
      </Link>
    </div>
  );
};

Auth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Object.assign(baseStyles, styles))(Auth);