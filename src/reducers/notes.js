const initialState = {
  notes: [],
};

const NotesReducer = (action = {}, state = initialState) => {
  const { type } = action;
  switch (type) {
    default:
      return { ...state };
  }
};

export default NotesReducer;