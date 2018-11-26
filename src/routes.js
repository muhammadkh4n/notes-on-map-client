import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './layout/Layout';

import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';

const routeList = [
  {
    component: Home,
    path: '/',
    layout: Layout,
    opts: {
      exact: true
    }
  },
  {
    component: Auth,
    path: '/login',
    layout: Layout,
    customProps: {
      formType: 'Login'
    }
  },
  {
    component: Auth,
    path: '/signup',
    layout: Layout,
    customProps: {
      formType: 'Sign Up'
    }
  }
];

export default () => {
  return (
    <Router>
      <Switch>
        {routeList.map((route, i) => (
          renderRoute(route, i)
        ))}
      </Switch>
    </Router>
  );
}

const renderRoute = (route, index) => {
  const Layout = route.layout;
  const Component = route.component;
  const { opts, path, customProps = {} } = route;
  let render;

  if (Layout) {
    render = (props) => (
      <Layout {...props} {...customProps}>
        <Component {...props} {...customProps} />
      </Layout>
    );
  } else {
    render = (props) => (
      <Component {...props} {...customProps} />
    );
  }
  return (
    <Route
      key={`${index}`}
      path={path}
      render={render}
      {...opts} />
  );
};