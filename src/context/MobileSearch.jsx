import { createContext, useState } from "react";

export const MobileSearchContext = createContext();
export const MobileSearchContentProvider = ({children}) => {
    const [mobile,setMobile] = useState(false);
    const settingMobile = (val)=>{
        setMobile(val)
    }
    const value = {
        mobile,
        settingMobile
    }
  return <MobileSearchContext.Provider value={value}>{children}</MobileSearchContext.Provider>;
};
