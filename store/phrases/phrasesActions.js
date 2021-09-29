import axios from 'axios';
import {
  FETCH_PHRASES_REQUEST,
  FETCH_PHRASES_FAILURE,
  FETCH_PHRASES_SUCCESS,
} from './phrasesTypes';

export const fetchPhrasesRequest = () => ({
  type: FETCH_PHRASES_REQUEST,
});

export const fetchPhrasesSuccess = (users) => ({
  type: FETCH_PHRASES_SUCCESS,
  payload: users,
});

export const fetchPhrasesFailure = (error) => ({
  type: FETCH_PHRASES_FAILURE,
  payload: error,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchPhrasesRequest());
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      // response.data is the users
      const users = response.data;
      dispatch(fetchPhrasesSuccess(users));
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchPhrasesFailure(error.message));
    });
};
