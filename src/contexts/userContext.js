import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  //useerdata ayega successful login hone ke baad
  ///logout krne pe data remove localstorage clear
  const userLogin = (data) => {
    setUserData(data);
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("token");
  };
  return (
    <UserContext.Provider
      value={{
        userData,
        userLogin,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
