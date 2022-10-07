import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shortenDescription, ShortenTitle } from "../../utils/extraFunction";
export const ContentBox = ({ item }) => {
  const [view, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const {
    snippet: {
      thumbnails: {
        medium: { url },
      },
      description,
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

  useEffect(() => {
    axios
      .get("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: videoId,
          key: process.env.REACT_APP_YT_KEY,
        },
      })
      .then(({ data }) => {
        setDuration(data?.items[0]?.contentDetails?.duration);
        setViews(data?.items[0]?.statistics?.viewCount);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("/channels", {
        params: {
          part: "snippet",
          id: channelId,
          key: process.env.REACT_APP_YT_KEY,
        },
      })
      .then(({ data: { items } }) => {
        setChannelIcon(items[0]?.snippet?.thumbnails?.default);
      });
  }, [channelId]);
  return (
    <Link to={`/play_video/${videoId}`}>
      <Flex
        justifyContent={"space-between"}
        m={"auto"}
        width={"80%"}
        height={["", "", "200px"]}
        flexDirection={["column", "column", "row"]}
        gap="20px"
        boxShadow={"2xl"}
        borderRadius="10px"
        cursor={"pointer"}
      >
        <Box width={["100%", "100%", "35%"]} h={["65%", "100%", "100%"]}>
          <Image w={"100%"} h="100%" src={url} />
        </Box>
        <Flex
          padding={"10px"}
          gap={"5px"}
          flexDirection={"column"}
          width={["100%", "100%", "63%"]}
        >
          <Text fontSize={"18px"}>{ShortenTitle(title)}</Text>
          <Flex fontSize={"12px"} color="gray" gap={"5px"}>
            <Text>{numeral(view).format("0a")} views</Text>
            <Text>•</Text>
            <Text>{moment(publishedAt).startOf("hour").fromNow()}</Text>
          </Flex>

          <Flex alignItems={"center"} gap={"12px"}>
            <Box width={"25px"} height="25px">
              <Image w={"100%"} h="100%" src={channelIcon?.url} />
            </Box>
            <Text color={"gray"} fontSize={"14px"}>
              {channelTitle}
            </Text>
          </Flex>

          <Text color={"gray"} fontSize={"14px"}>
            {shortenDescription(description)}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};
