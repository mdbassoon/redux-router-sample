import React from 'react';
import './App.css';
import Counter from './Counter.js';
import Message from './Message.js';
import {Provider} from 'react-redux';
import Store from './Store.js';
import { Link,Switch, BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component { 
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Change Message</Link></li>
              <li><Link to="/counter">See Counter</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Message} />
            <Route path='/counter' component={Counter} />
          </Switch>
        </Router>
      </Provider>
    );
  }
} export default App;
