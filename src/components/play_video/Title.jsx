import { Box, Divider, Flex, Text, useToast } from "@chakra-ui/react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiTwotoneDislike,
  AiFillDislike,
} from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { FaDonate } from "react-icons/fa";
import { BiCut } from "react-icons/bi";
import { MdReadMore } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { Comment } from "./Comment";
import moment from "moment";
import numeral from "numeral";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/localStorage";
import { useState } from "react";
import { notification } from "../../utils/extraFunction";
import { useDispatch } from "react-redux";
import { dislikingVideo, postingLikedVideos } from "../../redux/favourite/action";
import { postingSavedVideos } from "../../redux/save/action";
export const Title = ({ snippet, statistics, extraDetails }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [lik, setLik] = useState("simple");
  const [dislik, setDisLik] = useState("simple");
  const duration = extraDetails?.contentDetails?.duration
  const seconds = moment.duration(duration).asSeconds();
  const _durations = moment.utc(seconds * 1000).format("mm:ss");
  const payload = {
    video_thumbnail:extraDetails?.snippet?.thumbnails?.high?.url,
    video_title:extraDetails?.snippet?.title,
    channel_title:extraDetails?.snippet?.channelTitle,
    views:extraDetails?.statistics?.viewCount,
    duration:_durations,
    posted_at:moment(extraDetails?.snippet?.publishedAt).format("LL")
  }

  const handleLikeColour = () => {
    setLik("like");
    setDisLik("simple")
    dispatch(postingLikedVideos(toast,payload))
  };

  const handleSaveData = ()=>{
    dispatch(postingSavedVideos(toast,payload))
  }

  const handleDisLikeColour = () => {
    setDisLik("dislike");
    setLik("simple")
    dispatch(dislikingVideo(toast))
  };
  return (
    <Flex p={"0 10px 0 10px"} gap={"10px"} flexDirection={"column"}>
      <Text fontSize={"18px"}>{extraDetails?.snippet?.title}</Text>
      <Flex
        flexWrap={"wrap"}
        flexDirection={["column", "row", "row"]}
        justifyContent={"space-between"}
      >
        <Flex gap={"4px"} fontSize={"14px"} color="gray">
          <Text>{extraDetails?.statistics?.viewCount} views</Text>
          <Text>•</Text>
          <Text>{moment(extraDetails?.snippet?.publishedAt).format("LL")}</Text>
        </Flex>
        <Flex
          flexWrap={"wrap"}
          gap={["10px", "15px", "18px"]}
          alignItems={"center"}
        >
          <Flex gap={"5px"} alignItems={"center"}>
            {lik === "simple" ? (
              <AiOutlineLike
                onClick={handleLikeColour}
                cursor={"pointer"}
                fontSize={["19px", "19px", "22px"]}
              />
            ) : lik === "like" ? (
              <AiFillLike
                cursor={"pointer"}
                fontSize={["19px", "19px", "22px"]}
              />
            ) : (
              <AiOutlineLike
                onClick={handleLikeColour}
                cursor={"pointer"}
                fontSize={["19px", "19px", "22px"]}
              />
            )}
            <Text
              cursor={"pointer"}
              fontWeight="600"
              fontSize={["13px", "13px", "15px"]}
              title="I LIKE THIS"
            >
              {numeral(extraDetails?.statistics?.likeCount).format("0a")}
            </Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            {dislik === "simple" ? (
              <AiOutlineDislike
                cursor={"pointer"}
                fontSize={["19px", "19px", "22px"]}
                onClick={handleDisLikeColour}
              />
            ) : dislik === "dislike" ? (
              <AiFillDislike
                cursor={"pointer"}
                fontSize={["19px", "19px", "22px"]}
              />
            ) : (
              <AiOutlineDislike
                cursor={"pointer"}
                fontSize={["19px", "19px", "22px"]}
                onClick={handleDisLikeColour}
              />
            )}
            <Text
              cursor={"pointer"}
              fontWeight="600"
              fontSize={["13px", "13px", "15px"]}
              title="I DISLIKE THIS"
            >
              DISLIKE
            </Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <RiShareForwardLine
              cursor={"pointer"}
              fontSize={["19px", "19px", "22px"]}
            />
            <Text
              cursor={"pointer"}
              fontWeight="600"
              fontSize={["13px", "13px", "15px"]}
              title="SHARE"
            >
              SHARE
            </Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <FaDonate cursor={"pointer"} fontSize={["19px", "19px", "22px"]} />
            <Text
              cursor={"pointer"}
              fontWeight="600"
              fontSize={["13px", "13px", "15px"]}
              title="Show support with Super Thanks"
            >
              THANKS
            </Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <BiCut cursor={"pointer"} fontSize={["19px", "19px", "22px"]} />
            <Text
              cursor={"pointer"}
              fontWeight="600"
              fontSize={["13px", "13px", "15px"]}
              title="clip"
            >
              CLIP
            </Text>
          </Flex>
          <Flex onClick={handleSaveData} gap={"5px"} alignItems={"center"}>
            <MdReadMore
              cursor={"pointer"}
              fontSize={["19px", "19px", "22px"]}
            />
            <Text
              fontWeight="600"
              fontSize={["13px", "13px", "15px"]}
              cursor={"pointer"}
              title="save"
            >
              SAVE
            </Text>
          </Flex>
          <Flex gap={"5px"} alignItems={"center"}>
            <FiMoreHorizontal
              cursor={"pointer"}
              fontSize={["19px", "19px", "22px"]}
            />
            <Text
              fontWeight="600"
              fontSize={["13px", "13px", "15px"]}
              cursor={"pointer"}
              title="more"
            >
              More
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider />
      <Comment
        snippet={snippet}
        statistics={statistics}
        extraDetails={extraDetails}
      />
    </Flex>
  );
};
