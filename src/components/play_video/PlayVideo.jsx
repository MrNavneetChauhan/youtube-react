import { Box, Flex } from "@chakra-ui/react";
import { RightSection } from "./RightSection";

export const PlayVideo = () => {
  return <Flex flexDirection={["column","column","row"]} width={"99%"} border={"1px solid transparent"}  m={"30px auto"} justifyContent={["center","center","space-between"]} gap={["10px","10px","0"]} border={"1px solid black"}>
    <Flex border={"1px solid red"} width={["100%","100%","63%"]}>
      <Box width={"100%"} height={["200px","200px","430px"]} border={"1px solid black"}>
        <iframe/>
      </Box>
      <Box></Box>
    </Flex>
    <Flex border={"1px solid red"} width={["100%","100%","34%"]}>
      <RightSection/>
    </Flex>
  </Flex>;
};
