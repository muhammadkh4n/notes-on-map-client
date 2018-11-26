import axios from 'axios';

export const AUTH_TYPES = {
  AUTH: 'AUTH',
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

export const login = (loginData) => ({
  type: AUTH_TYPES.AUTH,
  payload: axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/auth/login`,
    loginData
  )
});

export const signup = (signupData) => ({
  type: AUTH_TYPES.AUTH,
  payload: axios.post(
    `${process.env.REACT_APP_SERVER_URL}/api/auth/register`,
    signupData
  )
});

export const setCurrentUser = (user) => (dispatch) => {
  Object.assign(localStorage, user);
  dispatch({
    type: AUTH_TYPES.SET_CURRENT_USER,
    payload: user
  });
};