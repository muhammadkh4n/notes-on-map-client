import React from 'react';
import Proptypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Button,
  withStyles
} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

import styles from './styles';

const Header = ({ classes }) => {
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <nav className={classes.grow}>
            <Link to="/" className={classes.link}>
              <Button
                color="inherit">Home</Button>
            </Link>
          </nav>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

Header.propTypes = {
  classes: Proptypes.object.isRequired
};

const composeStyles = withStyles(styles);
export default composeStyles(withRouter(Header));