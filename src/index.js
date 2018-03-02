import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AUTHORIZED_USER } from './actions';
import registerServiceWorker from './registerServiceWorker';
// Components
import Public from './Public';
import PrivateRoute from './components/auth/PrivateRoute';
//Actions & Reducers
import reducers from './reducers';
// Create Store with Middleware
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

// dispath AUTHORIZED_USER if user_token
const user_token = localStorage.getItem('user_token');
if( user_token ) {
  store.dispatch({ type: AUTHORIZED_USER });
}

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Public} />
        <Route path="/private" component={PrivateRoute} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
