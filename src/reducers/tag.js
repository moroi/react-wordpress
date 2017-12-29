import { FETCH_CAT } from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAT:
      return action.payload;

    default:
      return state;
  }
}