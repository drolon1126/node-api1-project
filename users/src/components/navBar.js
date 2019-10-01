import React from 'react';
import { NavLink, Link } from "react-router-dom";

const NavBar = () =>{
    return (
      <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add'>Add User</NavLink>
      </>
  );
}

export default NavBar;