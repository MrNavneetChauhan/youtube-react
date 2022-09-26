import { useColorMode } from "@chakra-ui/react";
import { createContext } from "react";

export const ColorContext  = createContext();
export const ColorContextProvider = ({children})=>{
    const {colorMode,toggleColorMode} = useColorMode();
    const value = {
        colorMode,
        toggleColorMode
    }
    return (
        <ColorContext.Provider value={value}>
        {children}
        </ColorContext.Provider>
    )
}