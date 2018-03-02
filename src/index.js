import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

import Public from './Public';
import Protected from './Protected'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route path="/protected" component={Protected} />
        <Route component={Public} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
