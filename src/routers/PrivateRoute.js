import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  notPrivate,
  isAuthenticated,
  component: Component,
  ...rest // of props
}) => (
    <Route
      {...rest}
      component={(props) => (
        isAuthenticated ? (
          notPrivate ? (<Redirect to="/dashboard" />) : (<Component {...props} />)
        ) : (
            notPrivate ? (<Component {...props} />) : (<Redirect to="/" />)
          )
      )}
    />
);



const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
