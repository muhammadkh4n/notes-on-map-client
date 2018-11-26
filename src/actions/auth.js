import axios from 'axios';

export const AUTH_TYPES = {
  LOGIN: 'LOGIN'
};

export const login = (loginData) => ({
  type: AUTH_TYPES.LOGIN,
  payload: axios.post(
    process.env.REACT_APP_SERVER_URL,
    loginData
  )
});