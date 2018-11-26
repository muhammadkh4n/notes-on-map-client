import { NOTE_TYPES } from '../actions/note';

const initialState = {
  notes: [],
  error: null
};

const NotesReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  const { notes } = state;
  switch (type) {
    case NOTE_TYPES.GET_NOTES:
      return { ...state, notes: !error && payload, error: error && payload };
    case NOTE_TYPES.ADD_NOTE:
      return {
        ...state,
        notes: !error && [ ...notes, payload ],
        error: error && payload
      };
    default:
      return { ...state };
  }
};

export default NotesReducer;