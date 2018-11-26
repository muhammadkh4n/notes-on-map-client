import axios from 'axios';

export const AUTH_TYPES = {
  AUTH: 'AUTH',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  LOGOUT: 'LOGOUT'
};

export const login = (loginData) => ({
  type: AUTH_TYPES.AUTH,
  payload: (async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/auth/login`,
        loginData
      );
      Object.assign(localStorage, response.data.data);
      return Promise.resolve(response.data.data);
    } catch (error) {
      return Promise.reject(error);
    }
  })()
});

export const signup = (signupData) => ({
  type: AUTH_TYPES.AUTH,
  payload: (async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/auth/register`,
        signupData
      );
      Object.assign(localStorage, response.data.data);
      return Promise.resolve(response.data.data);
    } catch (error) {
      return Promise.reject(error);
    }
  })()
});

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({type: AUTH_TYPES.LOGOUT});
}

export const setCurrentUser = (user) => (dispatch) => {
  dispatch({
    type: AUTH_TYPES.SET_CURRENT_USER,
    payload: user
  });
};