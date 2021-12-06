import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import SignInHome from './pages/SignInHome/SignInHome';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInHome} />
        </Switch>
      </div>
    );
  }
}

export default App;
