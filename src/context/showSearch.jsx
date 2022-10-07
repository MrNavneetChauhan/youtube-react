import { createContext, useState } from "react";

export const ShowSearchContext = createContext();

export const ShowSearchContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const settingShow = (val) => {
    setShow(val);
  };

  const value = {
    show,
    settingShow,
  };
  return (
    <ShowSearchContext.Provider value={value}>{children}</ShowSearchContext.Provider>
  );
};
