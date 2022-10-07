import { Flex, Image } from "@chakra-ui/react"

export const Error = ()=>{
    return (
        <Flex w={"95%"} justifyContent="center" m="auto">
            <Image  src="/error.gif"/>
        </Flex>
    )
}