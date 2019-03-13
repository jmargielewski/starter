import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './types';
import api from '../../api/api';

const fetchDataSuccess = response => ({
  type: FETCH_DATA_SUCCESS,
  payload: response,
});

const fetchDataFailure = err => ({
  type: FETCH_DATA_FAILURE,
  payload: err,
});

export const fetchdata = data => async (dispatch) => {
  dispatch({ type: FETCH_DATA });
  try {
    const response = await api.get('/');
    if (response.status === 200) {
      dispatch(fetchDataSuccess(response.data));
    } else {
      console.error('ERROR', response.status);
    }
  } catch (err) {
    dispatch(fetchDataFailure(err));
  }
};
