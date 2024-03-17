import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";
import "./Navbar.css";
import { AuthContext } from "../main";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const {handleLogout}=useContext(AuthContext)
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
        {NavItems().map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.path} className={item.cName} onClick={item.title === "Logout" ? handleLogout : null}>
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
