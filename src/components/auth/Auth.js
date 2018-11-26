import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './styles';
import baseStyles from '../../styles';

const Auth = props => {
  const { classes, isAuthenticated, currentUser, logout } = props;
  return (
    <div className={classes.root} id="auth">
      {isAuthenticated ?
        <Fragment>
          <Typography variant="h6" color="inherit">
            { currentUser.username }
          </Typography>
          <Button
            onClick={logout}
            color="inherit">Logout</Button>
        </Fragment>
        :
        <Link to="/login" className={classes.link}>
          <Button color="inherit">Login</Button>
        </Link>
      }
    </div>
  );
};

Auth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Object.assign(baseStyles, styles))(Auth);