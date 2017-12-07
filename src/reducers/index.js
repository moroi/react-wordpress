import { combineReducers } from 'redux';
import posts from './posts';
import post from './post';

const reducers = combineReducers({
  posts,
  post
});

export default reducers;
