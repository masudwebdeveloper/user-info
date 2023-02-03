import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [searchName, setSearchName] = useState({search: ''});

  

  const AllInfo = {
    searchName,
    setSearchName,
  };
  return (
    <div>
      <AppContext.Provider value={AllInfo}>{children}</AppContext.Provider>
    </div>
  );
};

export default Provider;
