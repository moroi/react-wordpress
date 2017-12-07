import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';

import App from './components/app';
import HomeContainer from './containers/home';
import SingleContainer from './containers/single';
import NotFound from './components/404';

const persistedState = localStorage.getItem("State")
  ? JSON.parse(localStorage.getItem("State"))
  : {};

const store = configureStore(persistedState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/:id(\d+)" component={SingleContainer} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
