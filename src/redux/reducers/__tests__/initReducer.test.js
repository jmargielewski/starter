import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../../actions/types';
import initReducer, { INITIAL_STATE } from '../initReducer';

describe('Auth Reducer', () => {
  it('handles action of unknown type', () => {
    const action = { type: 'UNKNOWN' };
    const newState = initReducer(INITIAL_STATE, action);

    expect(newState).toEqual(INITIAL_STATE);
  });

  it('handles action of type FETCH_DATA_REQUEST', () => {
    const action = { type: FETCH_DATA_REQUEST };
    const newState = initReducer(INITIAL_STATE, action);

    expect(newState).toEqual({ ...INITIAL_STATE, loading: true });
  });

  it('handles action of type FETCH_DATA_SUCCESS', () => {
    const action = {
      type: FETCH_DATA_SUCCESS,
      payload: { name: 'John' },
    };
    const newState = initReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...INITIAL_STATE,
      data: action.payload,
      loading: false,
    });
  });

  it('handles action of type FETCH_DATA_FAILURE', () => {
    const action = {
      type: FETCH_DATA_FAILURE,
      payload: 'failure',
    };
    const newState = initReducer(INITIAL_STATE, action);

    expect(newState).toEqual({
      ...INITIAL_STATE,
      errorMessage: action.payload,
      loading: false,
    });
  });
});
