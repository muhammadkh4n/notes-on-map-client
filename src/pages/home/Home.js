import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './styles';
import baseStyles from '../../styles';

class Home extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>Welcome to Notes on the Map</h1>
        <Link to="/notes" className={classes.link}>
          <Button color="primary" variant="contained" className={classes.createBtn}>
            Create a Note
          </Button>
        </Link>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles({ ...baseStyles, ...styles })(Home);