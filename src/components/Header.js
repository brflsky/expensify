import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <div>
    <header>
      <h1>
        Expensify
      </h1>
    </header>
    <NavLink activeClassName="is-active" to="/" exact={true}>Home </NavLink>
    <NavLink activeClassName="is-active" to="/create" >Create </NavLink>
    <NavLink activeClassName="is-active" to="/help" >Help</NavLink>
  </div>
);

export default Header;