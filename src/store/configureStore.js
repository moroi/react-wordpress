import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(
  promise,
  thunk
);

export default function configureStore(initialState) {
  return createStore(reducers, initialState, enhancer);
}
