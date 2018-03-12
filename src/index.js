import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
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

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/user" component={Authorized} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
