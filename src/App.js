import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRouter from './components/AppRouter';


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route path="/" exact component={AppRouter} />       
          {/* {console.log(store.getState())} */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
