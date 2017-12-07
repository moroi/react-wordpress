import { FETCH_POSTS, RECEIVE_POSTS, ERROR_POSTS } from '../constants';

const initialState = {
  posts: [],
  totalPages: 0,
  isError: null,
  isLoading: false
};

export default (state = initialState, action) => {
  let error;
  switch (action.type) {
    case FETCH_POSTS:
      return {
        posts: [],
        totalPages: 0,
        isError: null,
        isLoading: true
      };

    case RECEIVE_POSTS:
      return {
        posts: action.payload,
        totalPages: action.totalPages,
        isError: null,
        isLoading: false
      };

    case ERROR_POSTS:
      error = action.payload || { message: action.payload.message };
      return {
        posts: [],
        totalPages: 0,
        isError: error,
        isLoading: false
      };

    default:
      return state;
  }
}

