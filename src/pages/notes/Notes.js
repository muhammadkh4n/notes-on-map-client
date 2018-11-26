import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';

import Maps from '../../components/maps/Maps';
import {
  getNotes,
  addNote,
  setCurrentLocation,
  toggleNoteWindow,
  updateNewNote,
  toggleMarkerWindow
} from '../../actions/note';
import styles from './styles';
import baseStyles from '../../styles';
import NoteMarker from './note-marker/NoteMarker';

class Notes extends Component {

  map = null;

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.props.setCurrentLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      });
    }
    this.props.getNotes();
  }

  getMarkersFromNotes = (notes) => {
    return notes.map((note, i) => (
      <NoteMarker key={note._id} note={note} { ...this.props } />
    ));
  }

  onMapClick = (e) => {
    const loc = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    this.props.toggleNoteWindow(loc);
    if (this.props.noteWindowOpened) {
      this.props.setCurrentLocation(loc)
    }
  }

  render() {
    const { classes, notes } = this.props;
    return (
      <div className={classes.root} id="notes-page">
        <Maps
          setMap={map => this.map = map}
          mapClick={this.onMapClick}
          markers={this.getMarkersFromNotes(notes)}
          { ...this.props }
        />
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
    addNote: () => dispatch(addNote()),
    setCurrentLocation: (loc) => dispatch(setCurrentLocation(loc)),
    toggleNoteWindow: (loc) => dispatch(toggleNoteWindow(loc)),
    toggleMarkerWindow: (noteId) => dispatch(toggleMarkerWindow(noteId)),
    updateNewNote: (note) => dispatch(updateNewNote(note))
  })
);

const composeStyles = withStyles({ ...baseStyles, ...styles });

export default composeRedux(composeStyles(Notes));