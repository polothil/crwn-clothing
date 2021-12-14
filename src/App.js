import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header/Header';
import HomePage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import SignInHome from './pages/SignInHome/SignInHome';
import Checkout from './pages/Checkout/Checkout';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selectors';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          // console.log(snapshot);
          // console.log(snapshot.data());
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInHome />)} />
          {/* <Route exact path='/signin' component={SignInHome} /> */}
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser });

const mapDispatchToProps = (dispatch) => {
  return { setCurrentUser: (user) => dispatch(setCurrentUser(user)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
