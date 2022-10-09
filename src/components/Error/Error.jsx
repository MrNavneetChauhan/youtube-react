import { Flex, Image, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { MobileSearchContext } from "../../context/MobileSearch"
import { ShowSearchContext } from "../../context/showSearch"

export const Error = ()=>{
    const {show,settingShow} = useContext(ShowSearchContext)
    const {settingMobile} = useContext(MobileSearchContext)
    return (
        <Flex  flexDirection={"column"} onClick={()=>{
            settingShow(false)
            settingMobile(false)
        }} w={"95%"} justifyContent="center" m="10px auto">
            <Flex fontWeight={"600"} fontSize="20px" flexDirection={"column"} alignItems="center">
            <Text textAlign={"center"}> Youtube API KEY is Expired for couple of hours, Please visit after some time. </Text>
            <Text>Thankyou •• Navneet Chauhan ••</Text>
            </Flex>
            <Image h={"500px"} objectFit="contain" src="/error.gif"/>
        </Flex>
    )
}