import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './styles';

class Home extends Component {

  render() {
    const { classes: { root, createBtn } } = this.props;
    return (
      <div className={root}>
        <h1>Welcome to Notes on the Map</h1>
        <Link to="/notes">
          <Button color="primary" variant="contained" className={createBtn}>
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

export default withStyles(styles)(Home);