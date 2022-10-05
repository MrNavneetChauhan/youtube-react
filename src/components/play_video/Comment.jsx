import {
  Text,
  Avatar,
  Box,
  Button,
  Flex,
  Divider,
  Input,
} from "@chakra-ui/react";
import Picker from "emoji-picker-react";
import { BiSmile } from "react-icons/bi";
import { useState } from "react";
import { MdOutlineSort } from "react-icons/md";
import InputEmoji from "react-input-emoji";
import { useSelector } from "react-redux";
import numeral from "numeral";
export const Comment = ({ snippet, statistics,extraDetails }) => {
  return (
    <Flex flexWrap={"wrap"} gap={"10px"} flexDirection={"column"} w={"100%"}>
      <Flex alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
        <Flex p={"0 5px 0 5px"} alignItems={"center"} gap={"18px"}>
          <Avatar src={snippet?.thumbnails?.default?.url} />
          <Box>
            <Text fontSize={"14px"} fontWeight={"600"}>
              {snippet?.localized?.title}
            </Text>
            <Text color={"gray"} fontSize={"14px"}>
              {numeral(statistics?.subscriberCount).format("0.a")} Subscribers
            </Text>
          </Box>
        </Flex>
        <Button p={"0 25px 0 25px"} borderRadius={"2px"} colorScheme={"red"}>
          Subscribe
        </Button>
      </Flex>
      <Flex  w={"100%"} p={"10px"} fontSize={"14px"} m={"15px auto"}  flexWrap={"wrap"}>
        <Text>{extraDetails?.snippet?.description}</Text>
      </Flex>
      <Divider />
      <Flex>
        <Flex gap={"80px"}>
          <Text>{snippet?.commentCount}</Text>
          <Flex cursor={"pointer"} alignItems={"center"}>
            <MdOutlineSort />
            <Text>Sort By</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={"8px"} justifyContent={"center"} flexDir={"column"}>
        <Flex gap={"15px"}>
          <Avatar width={"40px"} height="40px" />
          <InputEmoji
            border={"none"}
            borderBottom={"1px solid lightgray"}
            outlineColor="white"
            placeholder="Add a Comment"
          />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"flex-end"}>
          <Flex gap={"10px"}>
            <Button>Cancel</Button>
            <Button>Comment</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
