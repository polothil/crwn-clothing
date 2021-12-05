import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';

import HomePage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
