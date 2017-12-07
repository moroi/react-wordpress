import { FETCH_POST, RECEIVE_POST, ERROR_POST, RESET_POST } from "../constants";

const initialState = {
  post: null,
  isLoading: false,
  isError: null
};

export default (state = initialState, action) => {
  let error;
  switch (action.type) {
    case FETCH_POST:
      return {
        post: null,
        isLoading: true,
        isError: null
      };

    case RECEIVE_POST:
      return {
        post: action.payload,
        isLoading: false,
        isError: null
      };

    case ERROR_POST:
      error = action.payload || { message: action.payload.message };
      return {
        post: null,
        isLoading: false,
        isError: error
      };

    case RESET_POST:
      return {
        post: null,
        isLoading: false,
        isError: null
      };

    default:
      return state;
  }
}

