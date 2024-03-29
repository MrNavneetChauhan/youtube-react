import { Avatar, Box, Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { shortenChannelName, ShortenTitle } from "../../utils/extraFunction";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Loaders } from "../Loaders/Loaders";
import { setToLocalStorage } from "../../utils/localStorage";
export const Display = (item) => {
  const [view, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  console.log("process",process.env.REACT_APP_YT_KEY)
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
  useEffect(() => {
    axios
      .get("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: videoId,
          key: process.env.REACT_APP_YT_KEY,
        },
      })
      .then(({ data: { items } }) => {
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
          key: process.env.REACT_APP_YT_KEY,
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
      onClick={()=>{
        setToLocalStorage("c_id",channelId)
        setToLocalStorage("title",title)
        setToLocalStorage("v_id",videoId)
      }}
    >
      <Link
        style={{
          position: "relative",
          height: "60%",
          width: "100%",
          textDecoration: "none",
        }}
        to={`play_video/${videoId}`}
      >
        <LazyLoadImage effect="blur" h={"100%"} w={"100%"} src={url} />
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
      </Link>
      <Flex h={"20%"} padding={"8px"} gap={"10px"} alignItems={"start"}>
        <Box>
          <Avatar width={"35px"} height={"35px"} src={channelIcon?.url} />
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
