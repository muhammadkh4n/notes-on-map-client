import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './layout/Layout';

import Home from './pages/home/Home';

const routeList = [
  {
    component: Home,
    path: '/',
    layout: Layout
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
  const { opts, path } = route;
  let render;

  if (Layout) {
    render = (props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  } else {
    render = (props) => (
      <Component {...props} />
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