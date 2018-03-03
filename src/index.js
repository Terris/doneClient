import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { authTypes } from './constants';
import registerServiceWorker from './registerServiceWorker';

// Components
import Home from './components/Home';
import SignUp from './components/SignUp';
import Authorized from './components/Authorized';
//Actions & Reducers
import reducers from './reducers';
// Create Store with Middleware
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

// dispath AUTHORIZED_USER if user_token
const user_token = localStorage.getItem('user_token');
if( user_token ) {
  store.dispatch({ type: authTypes.AUTHORIZED_USER });
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
