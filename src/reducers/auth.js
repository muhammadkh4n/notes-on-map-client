
const initialState = {
  isAuthenticated: false,
  error: null,
  data: null,
  currentUser: null
};

const authReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case 'LOGIN':
      return { ...state, error: error && payload, data: !error && payload };
    default:
      return { ...state };
  }
}

export default authReducer;