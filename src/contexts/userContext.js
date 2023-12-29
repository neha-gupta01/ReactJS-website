import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  //useerdata ayega successful login hone ke baad
  ///logout krne pe data remove localstorage clear

  //   const handleLogout = () => {
  //     setUser();
  //     localStorage.clear();
  //   };
  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
