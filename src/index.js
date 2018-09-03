import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import PostsList from './components/PostsList';
import PostCreate from './components/PostCreate';
import PostView from './components/PostView';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={PostsList} />
            <Route exact path="/posts" component={PostsList} />
            <Route exact path="/posts/new" component={PostCreate} />
            <Route exact path="/posts/view/:id" component={PostView} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>
  , document.querySelector('.container'));
