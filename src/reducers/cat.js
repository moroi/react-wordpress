import { FETCH_TAG } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAG:
      return action.payload;

    default:
      return state;
  }
}