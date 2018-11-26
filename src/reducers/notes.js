import { NOTE_TYPES } from '../actions/note';

const initialState = {
  notes: [],
  error: null,
  currentLocation: { lat: -34.397, lng: 150.644 },
  noteWindowOpened: false,
  markerWindowOpen: {},
  newNote: null,
};

const NotesReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  const { notes } = state;
  switch (type) {
    case NOTE_TYPES.GET_NOTES:
      return { ...state, notes: error ? [] : payload, error: error && payload };
    case NOTE_TYPES.SET_CURRENT_LOCATION:
      return { ...state, currentLocation: payload };
    case NOTE_TYPES.TOGGLE_MARKER_WINDOW:
      return {
        ...state,
        markerWindowOpen: {
          ...state.markerWindowOpen,
          [payload]: !state.markerWindowOpen[payload]
        }
      };
    case NOTE_TYPES.TOGGLE_NOTE_WINDOW:
      return {
        ...state,
        newNote: state.noteWindowOpened ? null : payload,
        noteWindowOpened: !state.noteWindowOpened
      };
    case NOTE_TYPES.UPDATE_NEW_NOTE:
      return { ...state, newNote: { ...state.newNote, note: payload } };
    case NOTE_TYPES.ADD_NOTE:
      return {
        ...state,
        notes: error ? [ ...notes ] : [ ...notes, payload ],
        error: error && payload,
        noteWindowOpened: false,
        newNote: null
      };
    default:
      return { ...state };
  }
};

export default NotesReducer;