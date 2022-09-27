import { Box, Flex, Image, Text } from "@chakra-ui/react"

export const RightSection = ()=>{
    return (
        <Flex flexDirection={["column","column","row"]} gap={["10px","10px","0"]} justifyContent={"space-between"} border={"1px solid blue"} height={["160px","160px","110px"]} width={"100%"}>
        <Box width={["100%","100%","45%"]} height={"100%"} border={"1px solid red"}>
            <Image height={"100%"} w={"100%"} objectFit={"cover"} src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        </Box>
        <Box height={"100%"} width={["100%","100%","52%"]}>
            <Text mt={"2px"} lineHeight={"18px"} fontWeight={600} fontSize={"15px"}>
                This is the title off the video which is a little a long but i.
            </Text>
            <Box color={"gray"} fontWeight={500}  mt={"8px"}>
                <Text fontSize={"12px"}>Here the name of the channel</Text>
                <Flex gap={"5px"} fontSize={"12px"}>
                    <Text>1254k views </Text>
                    <Text>•</Text>
                    <Text>1 month ago</Text>
                </Flex>
            </Box>
        </Box>
        </Flex>
    )
}