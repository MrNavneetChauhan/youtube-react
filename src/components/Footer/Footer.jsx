import { Flex, Text } from "@chakra-ui/react"

export const Footer = ()=>{
    return (
        <Flex background={"telegram.600"} color={"white"} position={"fixed"} bottom={0} w={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Text>Made with ❤️ By Navneet Chauhan</Text>
        </Flex>
    )
}