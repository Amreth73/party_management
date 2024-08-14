// src/context/PriceContext.js
import React, { createContext, useState, useContext } from "react";

const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
  const [price, setPrice] = useState(null);

  return (
    <PriceContext.Provider value={{ price, setPrice }}>
      {children}
    </PriceContext.Provider>
  );
};

export const usePrice = () => useContext(PriceContext);
