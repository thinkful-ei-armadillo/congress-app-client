import React, { Component } from 'react';
// not used:  Fragment, useState, useEffect,
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import DashboardRoute from '../../routes/DashboardRoute';
import PrivateDashboardRoute from '../../routes/PrivateDashboardRoute';
import NotFoundRoute from '../../routes/NotFoundRoute';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import IdleService from '../../services/idle-service';
import './App.css';
import ProfileRoute from '../../routes/ProfileRoute';
import CompareMembersRoute from '../../routes/CompareMembersRoute';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets();

      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();

    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();

    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <Switch>
            <Route exact path={'/'} component={DashboardRoute} />
            <PublicOnlyRoute exact path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
            <PrivateRoute
              exact
              path={'/dashboard'}
              component={PrivateDashboardRoute}
            />
            <Route path={'/profile/:id'} component={ProfileRoute} />
            <Route path={'/compare'} component={CompareMembersRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
