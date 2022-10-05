import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import numeral from "numeral";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { shortenChannelName, ShortenTitle } from "../../utils/extraFunction";

export const RightSection = ({ item }) => {
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
  const [view, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const videoId = id?.videoId || id;
  const navigate = useNavigate();
  const seconds = moment.duration(duration).asSeconds();
  const _durations = moment.utc(seconds * 1000).format("mm:ss");

  var key = "AIzaSyC7gR712tr_ZIszHk-xEJGz7oO65daeQ20";
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
        setDuration(items[0]?.contentDetails?.duration);
        setViews(items[0]?.statistics?.viewCount);
      });
  }, [id]);

  return (
    <Link to={`/play_video/${videoId}`}>
      <Flex
        flexDirection={["column", "column", "row"]}
        gap={["10px", "10px", "0"]}
        justifyContent={"space-between"}
        border={"1px solid blue"}
        height={["300px", "350px", "110px"]}
        width={"100%"}
      >
        <Box
          width={["100%", "100%", "42%"]}
          height={["70%","80%","100%"]}
          border={"1px solid red"}
          position="relative"
          
        >
          <Image height={"100%"} w={"100%"} objectFit={"cover"} src={url} />
          <Text position={"absolute"} right={1} bottom={1} background="teal" p={"0 5px 0 5px"} borderRadius="5px" color={"white"}>{_durations}</Text>
        </Box>
        <Box
          paddingRight={"20px"}
          height={["30%","20%","100%"]}
          width={["100%", "100%", "52%"]}
        >
          <Text
            mt={"2px"}
            lineHeight={"18px"}
            fontWeight={600}
            fontSize={"15px"}
          >
            {ShortenTitle(title)}
          </Text>
          <Box color={"gray"} fontWeight={500} mt={"4px"}>
            <Text fontSize={"12px"}>{shortenChannelName(channelTitle)}</Text>
            <Flex gap={"5px"} fontSize={"12px"}>
              <Text>{numeral(view).format("0a")} views </Text>
              <Text>•</Text>
              <Text>{moment(publishedAt).startOf('hour').fromNow()}</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
};
