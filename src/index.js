import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { authConstants, storageConstants } from './constants';
import registerServiceWorker from './registerServiceWorker';

// Components
import Home from './components/Home';
import SignUp from './components/auth/SignUp';
import Authorized from './components/private/Authorized';
//Actions & Reducers
import reducers from './reducers';
// Create Store with Middleware
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

// dispath AUTHORIZED_USER if user_token
const userToken = localStorage.getItem(storageConstants.USER_TOKEN);
if( userToken ) {
  store.dispatch({ type: authConstants.AUTHORIZED_USER });
}

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/private" component={Authorized} />
          <Route path="/signup" component={SignUp} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
