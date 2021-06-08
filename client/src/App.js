import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import * as actions from './store/actions/index'

import HomeFeed from './containers/HomeFeed/HomeFeed'
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
// import Toast from './components/UI/Toasts/Toast'
import Spinner from './components/UI/LoadingIndicator/LoadingIndicator'

const App = (props) => {

    const {onAutoSignUp} = props;
    useEffect(() => {
      console.log("Auto Sign up")
      onAutoSignUp()
    },[onAutoSignUp])

    return (
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<div className="centerLoading"><Spinner /></div>}>
            {/* <Toast /> */}
            <Route path="/" exact >
              <Auth />
            </Route>
            <Route path="/home" exact >
              <HomeFeed />
            </Route>
            <Route path="/logout" exact >
              <Logout />
            </Route>
          </Suspense>
        </BrowserRouter>
      </div>
    );
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAutoSignUp: () => dispatch(actions.authCheckState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

