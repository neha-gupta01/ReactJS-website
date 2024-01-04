import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessfulLogin = (data) => {
    setUserData(data);
    console.log(data);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <UserContext.Provider
      value={{
        userData,
        handleSuccessfulLogin,
        handleLogout,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
