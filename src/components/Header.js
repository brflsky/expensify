import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ logout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard" ><h1>Expensify</h1></Link>
        <button className="button button--link" onClick={logout}>Logout</button>
      </div>
    </div>
  </header>

);

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startLogout())
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
