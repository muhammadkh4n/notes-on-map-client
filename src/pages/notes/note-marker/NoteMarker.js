import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';

const NoteMarker = props => {
  const { note } = props;
  const loc = { lat: note.lat, lng: note.lng };
  return (
    <Marker
      onClick={() => props.toggleMarkerWindow(note._id)}
      position={loc}>
      {props.markerWindowOpen[note._id] &&
        <InfoWindow onCloseClick={() => props.toggleMarkerWindow(note._id)}>
          <Fragment>
            <h3>{ note.note }</h3>
            <p><strong>Poster:</strong>&nbsp;
              <a href={`mailto:${note.user.email}`}>{ note.user.email }</a></p>
          </Fragment>
        </InfoWindow>
      }
    </Marker>
  );
};

NoteMarker.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteMarker;