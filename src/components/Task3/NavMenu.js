import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = ({ closeNav }) => {
  let activeStyle = {
    borderBottom: "3px solid red",
  };
  const isActiveHandler = ({ isActive }) =>
    isActive ? activeStyle : undefined;

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" style={isActiveHandler}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" style={isActiveHandler}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-profile" style={isActiveHandler}>
            User profile
          </NavLink>
        </li>
      </ul>
      <button onClick={closeNav}>close nav</button>
    </nav>
  );
};

export default NavMenu;
