const initialState = {
  notes: [],
};

const NotesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default NotesReducer;