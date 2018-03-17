import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ logout }) => (
  <div>
    <header>
      <h1>
        Expensify
      </h1>
    </header>
    <NavLink activeClassName="is-active" to="/" exact>Home </NavLink>
    <NavLink activeClassName="is-active" to="/create" >Create </NavLink>
    <NavLink activeClassName="is-active" to="/help" >Help</NavLink>
    <NavLink activeClassName="is-active" to="/dashboard" >Dashboard</NavLink>
    <button onClick={logout}>Logout</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startLogout())
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
