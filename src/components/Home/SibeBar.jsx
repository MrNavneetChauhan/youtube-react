import { Flex} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Text } from "@chakra-ui/react";
import { GiMultiDirections } from "react-icons/gi";
import { IoLogoPlaystation } from "react-icons/io";
import { MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { useContext } from "react";
import { ColorContext } from "../../context/ColorContext";
export const SideBar = () => {
  const {colorMode} = useContext(ColorContext)
  return (
    <Flex
      gap={"20px"}
      // justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      border={`1px solid ${colorMode === "light" ? "lightgray" : "#313131"}`}
      w={"90px"}
      p={"5px"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
        mt={"10px"}
      >
        <AiFillHome />
        <Text fontSize={"14px"}>Home</Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
      >
        <GiMultiDirections />
        <Text fontSize={"14px"}>Explore</Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
      >
        <IoLogoPlaystation />
        <Text fontSize={"14px"}>Shorts</Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
      >
        <MdSubscriptions />
        <Text fontSize={"14px"}>Subscriptions</Text>
      </Flex>

      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        h={"50px"}
      >
        <MdVideoLibrary />
        <Text fontSize={"14px"}>Library</Text>
      </Flex>
    </Flex>
  );
};
