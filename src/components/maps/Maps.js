import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import {
  TextField, Button
} from '@material-ui/core';

const Maps = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `calc(100vh - 64px)`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      ref={r => props.setMap(r)}
      defaultZoom={8}
      defaultCenter={props.currentLocation}
      onClick={props.mapClick}
    >
      <Fragment>
        <Marker
          onClick={() => props.toggleNoteWindow(props.currentLocation)}
          position={props.currentLocation}>
          {props.noteWindowOpened &&
            <InfoWindow onCloseClick={props.toggleNoteWindow}>
              <Fragment>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Add Note"
                  value={props.newNote.note}
                  onChange={e => props.updateNewNote(e.target.value)}
                  margin="normal"
                  type="textarea"
                  variant="outlined"
                />
                <Button
                  onClick={props.addNote}
                  color="primary">Save</Button>
              </Fragment>
            </InfoWindow>
          }
        </Marker>
        { props.markers }
      </Fragment>
    </GoogleMap>
  );
});

Maps.propTypes = {
  currentLocation: PropTypes.object.isRequired,
  markers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Maps;