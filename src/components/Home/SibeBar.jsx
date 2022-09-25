import { Flex } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Text } from "@chakra-ui/react";
import { GiMultiDirections } from "react-icons/gi";
import { IoLogoPlaystation } from "react-icons/io";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
export const SideBar = () => {
  return (
    <Flex
      gap={"20px"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      border={"1px solid lightgray"}
      w={"85px"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
        mt={"10px"}
      >
        <AiFillHome />
        <Text fontSize={"10px"}>Home</Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
      >
        <GiMultiDirections />
        <Text fontSize={"12px"}>Explore</Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
      >
        <IoLogoPlaystation />
        <Text fontSize={"12px"}>Shorts</Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
      >
        <MdSubscriptions />
        <Text fontSize={"12px"}>Subscriptions</Text>
      </Flex>

      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
      >
        <MdVideoLibrary />
        <Text fontSize={"12px"}>Library</Text>
      </Flex>
    </Flex>
  );
};