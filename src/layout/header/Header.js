import React from 'react';
import Proptypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Button,
  withStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import Auth from '../../components/auth/Auth';

import styles from './styles';
import baseStyles from '../../styles';

const Header = (props) => {
  const { classes, isAuthenticated } = props;
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.spaceBetween}>
          {isAuthenticated &&
            <nav>
              <Link to="/" className={classes.link}>
                <Button
                  color="inherit">Home</Button>
              </Link>
              <Link to="/notes" className={classes.link}>
                <Button
                  color="inherit">Notes</Button>
              </Link>
            </nav>
          }
          <Auth { ...props } />
        </Toolbar>
      </AppBar>
    </header>
  );
};

Header.propTypes = {
  classes: Proptypes.object.isRequired
};

const composeStyles = withStyles(Object.assign(baseStyles, styles));
export default composeStyles(Header);