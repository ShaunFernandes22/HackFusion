import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menuItems from "./NavItems";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <h1 className="w-full text-3xl font-bold italic text-[#000000]">
          EduQuest
        </h1>
      </NavLink>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.path} className={item.cName}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
