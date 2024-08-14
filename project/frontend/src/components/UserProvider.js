import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [venue, setVenue] = useState("");

  return (
    <UserContext.Provider value={{ userId, setUserId, venue, setVenue }}>
      {children}
    </UserContext.Provider>
  );
};
