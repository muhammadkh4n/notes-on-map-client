import { AUTH_TYPES } from '../actions/auth';
const initialState = {
  isAuthenticated: false,
  error: null,
  data: null,
  currentUser: null
};

const authReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case AUTH_TYPES.AUTH:
      return { ...state, error: error && payload, data: !error && payload };
    case AUTH_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload, isAuthenticated: true };
    default:
      return { ...state };
  }
}

export default authReducer;