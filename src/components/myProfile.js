import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../contexts/userContext";

const MyProfile = () => {
  const { userData } = useContext(UserContext);
  return (
    <div>
      <h2>My Profile</h2>
      <p>First Name: {userData.firstName}</p>
      <p>Last Name: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default MyProfile;
