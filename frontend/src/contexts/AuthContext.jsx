import { createContext } from "react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
export const AuthContext = createContext();

import { useEffect } from "react";
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const toast = useToast();
  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const handleLogout = () => {
    const loadingToast = toast({
      title: "Loading",
      description: "Signing out...",
      status: "info",
      duration: null,
      isClosable: true,
    });

    setTimeout(() => {
      localStorage.removeItem("token");
      setToken("");
      setIsLoggedIn(false);
      toast.close(loadingToast);
      toast({
        title: "Logged out",
        description: "You have successfully logged out!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        handleLogout,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
