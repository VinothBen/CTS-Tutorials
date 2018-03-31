import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
//import POST from './app/screens/Home/AxiosPost';
//import GET from './app/screens/Home/AxiosGET';
//import User from './app/screens/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
//import * as Comp from './app/screens/Home/Victry';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
// import Reducers from './app/ReduxSimple/Reducers';
// import App from './app/ReduxSimple/Components/App';
// import AddUser from './app/ReduxSimple/Components/InputBox';
// import ListUser from './app/ReduxSimple/Components/OutputText';
// import Update from './app/ReduxSimple/Components/Update';
import logger from 'redux-logger';
import Thunk from 'redux-thunk';
import 'react-toastify/dist/ReactToastify.min.css';
import Reducers from './app/VotingSystem/Reducers/';
import RootApp from './app/VotingSystem/Components/';

let store = createStore(Reducers, applyMiddleware(Thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <RootApp />
  </Provider>
  , document.getElementById('victry'));

/*ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route exact path="/" component={App} />
      <Route path="/adduser" component={AddUser} />
      <Route path="/listuser" component={ListUser} />
      <Route path="/update/:userid" component={Update} />
    </Router>
  </Provider>,
  document.getElementById('victry')
)*/

/*ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/:username" component={User} />
  </Router>,
  document.getElementById('container')
);*/

//ReactDOM.render(<Comp.App />, document.getElementById('victry'));
//ReactDOM.render(<GET />, document.getElementById('container'));
//ReactDOM.render(<POST />, document.getElementById('cont'));