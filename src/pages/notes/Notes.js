import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';

import { getNotes, addNote } from '../../actions/note';
import styles from './styles';
import baseStyles from '../../styles';

class Notes extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} id="notes-page">
        test
      </div>
    );
  }
}

Notes.propTypes = {
  classes: PropTypes.object.isRequired
};

const composeRedux = connect(
  ({ auth, notes }) => ({ auth, ...notes }),
  (dispatch) => ({
    getNotes: () => dispatch(getNotes()),
    addNote: (note) => dispatch(addNote(note))
  })
);

const composeStyles = withStyles({ ...baseStyles, ...styles });

export default composeRedux(composeStyles(Notes));