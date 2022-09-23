import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [icon, setIcon] = useState(false);

  const showSearchIcon = (val) => {
    setIcon(val);
  };

  const payload = {
    icon,
    showSearchIcon,
  };

  return (
    <SearchContext.Provider value={payload}>{children}</SearchContext.Provider>
  );
};
