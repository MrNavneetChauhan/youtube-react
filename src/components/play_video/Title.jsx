import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { FaDonate } from "react-icons/fa";
import {BiCut} from "react-icons/bi";
import {MdReadMore} from "react-icons/md";
import {FiMoreHorizontal} from "react-icons/fi";
import { Comment } from "./Comment";
export const Title = () => {
  return (
    <Flex p={"0 10px 0 10px"} gap={"10px"} flexDirection={"column"}>
      <Text fontSize={"18px"}>
        हनुमान और रावण का हुआ आमना सामना | Sankat Mochan Mahabali Hanumaan - 401
      </Text>
      <Flex flexWrap={"wrap"} flexDirection={["column","row","row"]} justifyContent={"space-between"}>
        <Flex fontSize={"14px"} color="gray">
          <Text>7,441,546 views</Text>
          <Text>.</Text>
          <Text>11 Jul 2022</Text>
        </Flex>
        <Flex flexWrap={"wrap"} gap={["10px","15px","25px"]} alignItems={"center"}>
          <Flex gap={"5px"} alignItems={"center"}>
            <AiOutlineLike cursor={"pointer"} fontSize={["19px","19px","22px"]} />
            <Text cursor={"pointer"} fontWeight="600" fontSize={["13px","13px","15px"]} title="I LIKE THIS">121K</Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <AiOutlineDislike cursor={"pointer"} fontSize={["19px","19px","22px"]} />
            <Text cursor={"pointer"} fontWeight="600" fontSize={["13px","13px","15px"]} title="I DISLIKE THIS">DISLIKE</Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <RiShareForwardLine cursor={"pointer"} fontSize={["19px","19px","22px"]} />
            <Text cursor={"pointer"} fontWeight="600" fontSize={["13px","13px","15px"]} title="SHARE">SHARE</Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <FaDonate cursor={"pointer"} fontSize={["19px","19px","22px"]} />
            <Text cursor={"pointer"} fontWeight="600" fontSize={["13px","13px","15px"]} title="Show support with Super Thanks">THANKS</Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <BiCut cursor={"pointer"} fontSize={["19px","19px","22px"]} />
            <Text cursor={"pointer"} fontWeight="600" fontSize={["13px","13px","15px"]} title="clip">CLIP</Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <MdReadMore cursor={"pointer"} fontSize={["19px","19px","22px"]} />
            <Text fontWeight="600" fontSize={["13px","13px","15px"]} cursor={"pointer"} title="save">SAVE</Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <FiMoreHorizontal cursor={"pointer"} fontSize={["19px","19px","22px"]} />
            <Text fontWeight="600" fontSize={["13px","13px","15px"]} cursor={"pointer"} title="more">More</Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider/>
      <Comment/>

    </Flex>
  );
};
