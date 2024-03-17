import { useContext } from "react";
import { AuthContext } from "../main";

const NavItems = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const menuItems = isLoggedIn
    ? [
        {
          title: "Generate Meet",
          path: "/meeting",
          cName: "nav-links",
        },
        {
          title: "Analytics",
          path: "/analytics",
          cName: "nav-links",
        },
        {
          title: "Logout",
          path: "/",
          cName: "nav-links",
        },
      ]
    : [
        {
          title: "Generate Meet",
          path: "/meeting",
          cName: "nav-links",
        },
        {
          title: "Signup",
          path: "/signup",
          cName: "nav-links",
        },
        {
          title: "Login",
          path: "/signin",
          cName: "nav-links",
        },
      ];

  return menuItems;
};

export default NavItems;
