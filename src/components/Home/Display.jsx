import { Avatar, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  gettingChannelInfo,
  gettingVideosData,
} from "../../redux/vidoes/action";
import { shortenChannelName, ShortenTitle } from "../../utils/extraFunction";
export const Display = ({ search }) => {
  const { posters, isLoading, isError,channels } = useSelector(
    (store) => store.videosReducer
  );
  const dispatch = useDispatch();
console.log("channel",channels)
  useEffect(() => {
    dispatch(gettingVideosData(search));
  }, [search]);

  useEffect(() => {
    dispatch(gettingChannelInfo(posters,["wokri"]));
  }, [search]);

  return isLoading ? (
    <p>LOading......</p>
  ) : (
    <Flex
      mt={"10px"}
      justifyContent={"center"}
      alignItems={"center"}
      gap="20px"
      wrap={"wrap"}
    >
      {posters.length > 0 &&
        posters.map((item, index) => {
          const {
            snippet: {
              thumbnails: {
                medium: { url },
              },
            },
          } = item;
          return (
            <Box
              title={item.title}
              boxShadow={"md"}
              cursor={"pointer"}
              height={"250px"}
              width={["80%", "300px", "285px"]}
              key={index}
            >
              <Image h={"60%"} w={"100%"} objectFit={"contain"} src={url} />
              <Flex h={"20%"} padding={"8px"} gap={"10px"} alignItems={"start"}>
                <Box>
                <Avatar
                  mt={"2px"}
                  width={"35px"}
                  height={"35px"}
                  src={"https://random.imagecdn.app/500/150"}
                />
                </Box>

                <Box>
                <Text fontWeight={"700"} fontSize={"14px"}>
                  {ShortenTitle("this is the title of video and it is like this")}
                </Text>
                <Text fontSize={"13px"} color="gray">
                  {shortenChannelName("this is the description of this video can raise upto 20 lines or upto 10 lines. Very beneficial this si s alos benefical brothers")}
                </Text>
                <Flex>

                <Text fontSize={"13px"} color="gray">
                    {(Math.random() * 10).toFixed(2)}M views •
                  </Text>
                  <Text fontSize={"13px"} color="gray">
                    1 year ago
                  </Text>
                </Flex>
                </Box>

               
              </Flex>
              
            </Box>
          );
        })}
    </Flex>
  );
};
