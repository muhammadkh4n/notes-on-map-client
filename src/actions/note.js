import axios from 'axios';

export const NOTE_TYPES = {
  GET_NOTES: 'GET_NOTES',
  ADD_NOTE: 'ADD_NOTE',
  UPDATE_NEW_NOTE: 'UPDATE_NEW_NOTE',
  TOGGLE_NOTE_WINDOW: 'TOGGLE_NOTE_WINDOW',
  TOGGLE_MARKER_WINDOW: 'TOGGLE_MARKER_WINDOW',
  SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION'
};

export const setCurrentLocation = (loc) => ({
  type: NOTE_TYPES.SET_CURRENT_LOCATION,
  payload: loc
});

export const updateNewNote = (note) => ({
  type: NOTE_TYPES.UPDATE_NEW_NOTE,
  payload: note
});

export const toggleNoteWindow = (loc) => (dispatch, getState) => {
  const { auth: { currentUser } } = getState();
  dispatch({
    type: NOTE_TYPES.TOGGLE_NOTE_WINDOW,
    payload: {
      note: '',
      user: currentUser.userId,
      ...loc
    }
  })
}

export const toggleMarkerWindow = noteId => ({
  type: NOTE_TYPES.TOGGLE_MARKER_WINDOW,
  payload: noteId
});

export const addNote = () => (dispatch, getState) => {
  const { notes: { newNote } } = getState();
  dispatch({
    type: NOTE_TYPES.ADD_NOTE,
    payload: (async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/notes`,
          newNote
        );
        return Promise.resolve(response.data.data);
      } catch (error) {
        return Promise.reject(error);
      }
    })()
  });
};

export const getNotes = () => ({
  type: NOTE_TYPES.GET_NOTES,
  payload: (async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/notes`
      );
      return Promise.resolve(response.data.data);
    } catch (error) {
      return Promise.reject(error);
    }
  })()
});
