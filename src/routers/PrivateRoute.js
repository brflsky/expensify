import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest // of props
}) => (
  <Route
    {...rest}
    component={() => (
      isAuthenticated ? (
        <Component />
      ) : (
        <Redirect to="/" />
      )
    )}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.id
});

export default connect(mapStateToProps)(PrivateRoute);
