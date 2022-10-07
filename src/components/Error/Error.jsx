import { Flex, Image } from "@chakra-ui/react"
import { useContext } from "react"
import { MobileSearchContext } from "../../context/MobileSearch"
import { ShowSearchContext } from "../../context/showSearch"

export const Error = ()=>{
    const {show,settingShow} = useContext(ShowSearchContext)
    const {settingMobile} = useContext(MobileSearchContext)
    return (
        <Flex  onClick={()=>{
            settingShow(false)
            settingMobile(false)
        }} w={"95%"} justifyContent="center" m="10px auto">
            <Image  src="/error.gif"/>
        </Flex>
    )
}