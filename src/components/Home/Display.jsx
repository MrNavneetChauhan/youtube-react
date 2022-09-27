import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { shortenChannelName, ShortenTitle } from "../../utils/extraFunction";
export const Display = (item) => {
  const [view, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const {
    snippet: {
      thumbnails: {
        medium: { url },
      },
      channelId,
      title,
      publishedAt,
      channelTitle,
    },
    id,
  } = item;

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const videoId = id?.videoId || id;

  var key = "AIzaSyBvt7iWnHLeRYtik2Vyb0Eqc8D1Zs44XxA";
  useEffect(() => {
    axios
      .get("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: videoId,
          key: key,
        },
      })
      .then(({ data: { items } }) => {
        // console.log(res, "this is video details");
        setDuration(items[0]?.contentDetails?.duration);
        setViews(items[0]?.statistics?.viewCount);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("/channels", {
        params: {
          part: "snippet",
          id: channelId,
          key: key,
        },
      })
      .then(({ data: { items } }) => {
        setChannelIcon(items[0]?.snippet?.thumbnails?.default);
      });
  }, [channelId]);

  return (
    <Box
      title={title}
      boxShadow={"md"}
      cursor={"pointer"}
      width={["80%", "300px", "250px"]}
    >
      <Box position={"relative"} h={"60%"} w={"100%"}>
        <Image h={"100%"} w={"100%"} objectFit={"cover"} src={url} />
        <Text
          right={1}
          bottom={1}
          background={"telegram.600"}
          color={"white"}
          fontSize={"13px"}
          position={"absolute"}
          borderRadius={"5px"}
          p={"0 2px 0 2px"}
        >
          {_duration}
        </Text>
      </Box>
      <Flex h={"20%"} padding={"8px"} gap={"10px"} alignItems={"start"}>
        <Box>
          <Avatar
            mt={"2px"}
            width={"35px"}
            height={"35px"}
            src={channelIcon?.url}
          />
        </Box>

        <Box>
          <Text fontWeight={"700"} fontSize={"14px"}>
            {ShortenTitle(title)}
          </Text>
          <Text fontSize={"13px"} color="gray">
            {shortenChannelName(channelTitle)}
          </Text>
          <Flex>
            <Text fontSize={"13px"} color="gray">
              {numeral(view).format("0.a")} views •
            </Text>
            <Text fontSize={"13px"} color="gray">
              {moment(publishedAt).fromNow()}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
