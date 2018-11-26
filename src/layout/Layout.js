import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './header/Header';
import { setCurrentUser, logout } from '../actions/auth';

class Layout extends Component {

  state = {};

  componentDidMount() {
    if (!this.props.isAuthenticated && localStorage.token) {
      this.props.setCurrentUser({
        userId: localStorage.userId,
        username: localStorage.username,
        token: localStorage.token
      });
    }
  }

  static getDerivedStateFromProps(props) {
    if (!localStorage.token && !props.isAuthenticated && !props.formType) {
      props.history.push('/login');
    } else if (props.isAuthenticated &&
              (props.match.path === '/login' ||
                props.match.path === '/signup')) {
      props.history.push('/')
    }
    return null;
  }

  render() {
    return (
      <div className="main-layout">
        <Header { ...this.props } />
        {this.props.children}
      </div>
    );
  }
}
export default connect(
  ({ auth }) => auth,
  (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    logout: () => dispatch(logout())
  })
)(withRouter(Layout));