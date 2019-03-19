import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/types';

export const INITIAL_STATE = {
  loading: false,
  data: null,
  errorMessage: '',
};

const initReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default initReducer;
