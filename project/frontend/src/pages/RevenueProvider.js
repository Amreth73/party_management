// // src/service pages/RevenueProvider.js
// import React, { createContext, useContext, useState } from "react";

// const RevenueContext = createContext();

// export const useRevenue = () => {
//   return useContext(RevenueContext);
// };

// export const RevenueProvider = ({ children }) => {
//   const [totalRevenue, setTotalRevenue] = useState(0);

//   const addRevenue = (amount) => {
//     console.log("para:" + amount);
//     console.log(typeof amount);

//     setTotalRevenue((prevRevenue) => prevRevenue + amount);
//     console.log("amts: " + totalRevenue);
//   };

//   return (
//     <RevenueContext.Provider value={{ totalRevenue, addRevenue }}>
//       {children}
//     </RevenueContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from "react";

const RevenueContext = createContext();

export const useRevenue = () => {
  return useContext(RevenueContext);
};

export const RevenueProvider = ({ children }) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState({
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  });

  const addRevenue = (amount, month) => {
    setMonthlyRevenue((prevRevenue) => ({
      ...prevRevenue,
      [month]: prevRevenue[month] + amount,
    }));
    console.log(monthlyRevenue[month] + " " + month);
    console.log(typeof monthlyRevenue[month]);
  };

  return (
    <RevenueContext.Provider value={{ monthlyRevenue, addRevenue }}>
      {children}
    </RevenueContext.Provider>
  );
};
