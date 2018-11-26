import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from './header/Header';
import { setCurrentUser } from '../actions/auth';

class Layout extends Component {

  state = {};

  componentDidMount() {
    
  }

  static getDerivedStateFromProps(props) {
    if (!props.isAuthenticated && localStorage.token) {
      props.setCurrentUser({
        userId: localStorage.userId,
        username: localStorage.username,
        token: localStorage.token
      });
    } else if (!props.isAuthenticated && !props.formType) {
      props.history.push('/login');
    } else if (props.isAuthenticated) {
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
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  })
)(withRouter(Layout));