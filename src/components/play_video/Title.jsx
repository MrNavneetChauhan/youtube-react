import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { FaDonate } from "react-icons/fa";
import {BiCut} from "react-icons/bi";
import {MdReadMore} from "react-icons/md";
import {FiMoreHorizontal} from "react-icons/fi";
import { Comment } from "./Comment";
import moment from "moment";
import numeral from "numeral";
export const Title = ({snippet,statistics,extraDetails}) => {
  return (
    <Flex p={"0 10px 0 10px"} gap={"10px"} flexDirection={"column"}>
      <Text fontSize={"18px"}>
      {extraDetails?.snippet?.title}
      </Text>
      <Flex  flexWrap={"wrap"} flexDirection={["column","row","row"]} justifyContent={"space-between"}>
        <Flex gap={"4px"} fontSize={"14px"} color="gray">
          <Text>{extraDetails?.statistics?.viewCount} views</Text>
          <Text>•</Text>
          <Text>{moment(extraDetails?.snippet?.publishedAt).format('LL')}</Text>
        </Flex>
        <Flex flexWrap={"wrap"} gap={["10px","15px","18px"]} alignItems={"center"}>
          <Flex gap={"5px"} alignItems={"center"}>
            <AiOutlineLike cursor={"pointer"} fontSize={["19px","19px","22px"]} />
            <Text cursor={"pointer"} fontWeight="600" fontSize={["13px","13px","15px"]} title="I LIKE THIS">{numeral(extraDetails?.statistics?.likeCount).format('0a')}</Text>
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
      <Comment snippet={snippet} statistics={statistics} extraDetails={extraDetails}/>

    </Flex>
  );
};
