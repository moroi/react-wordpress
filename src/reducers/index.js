import { combineReducers } from 'redux';
import posts from './posts';
import cat from './cat';
import tag from './tag';
import post from './post';

const reducers = combineReducers({
  posts,
  cat,
  tag,
  post
});

export default reducers;
