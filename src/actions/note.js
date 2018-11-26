import axios from 'axios';

export const NOTE_TYPES = {
  GET_NOTES: 'GET_NOTES',
  ADD_NOTE: 'ADD_NOTE'
};

export const addNote = (noteData) => ({
  type: NOTE_TYPES.ADD_NOTE,
  payload: (async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/notes`,
        noteData
      );
      return Promise.resolve(response.data.data);
    } catch (error) {
      return Promise.reject(error);
    }
  })()
});

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
