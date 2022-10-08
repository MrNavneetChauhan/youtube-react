import {
  Text,
  Avatar,
  Box,
  Button,
  Flex,
  Divider,
  Input,
  useToast,
} from "@chakra-ui/react";
import Picker from "emoji-picker-react";
import { BiSmile } from "react-icons/bi";
import { useEffect, useState } from "react";
import { MdOutlineSort } from "react-icons/md";
import InputEmoji from "react-input-emoji";
import { useDispatch, useSelector } from "react-redux";
import numeral from "numeral";
import { gettingComments, posttingComment } from "../../redux/comment/action";
import { getFromLocalStorage } from "../../utils/localStorage";
export const Comment = ({ snippet, statistics, extraDetails }) => {
  const shortDesc = extraDetails?.snippet?.description.substring(0, 299);
  const restDesc = extraDetails?.snippet?.description.split("");
  const { url } = useSelector((store) => store.authReducer);
  restDesc?.splice(0, 299);
  const [hide, setHide] = useState(true);
  const [comment, setComment] = useState("");
  const toast = useToast();
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const { isLoading, isError, comments } = useSelector(
    (store) => store.commentReducer
  );
  console.log(comments, "comments");

  const dispatch = useDispatch();
  const handleCommentSubmission = (e) => {
    dispatch(
      posttingComment(toast, {
        comment: comment,
        profile: getFromLocalStorage("url"),
        videoId: getFromLocalStorage("v_id"),
      })
    );
  };

  useEffect(() => {
    dispatch(gettingComments());
  }, []);

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
      <Flex
        w={"100%"}
        p={"10px"}
        fontSize={"14px"}
        m={"15px auto"}
        flexWrap={"wrap"}
      >
        <Text>{shortDesc}</Text>
        {hide ? "" : <Text>{restDesc.join("")}</Text>}
        <Button
          onClick={() => {
            setHide(!hide);
          }}
          background={"none"}
          border="1px solid lightgray"
        >
          Show More
        </Button>
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
          <Avatar src={url} width={"40px"} height="40px" />
          <Input
            border={"none"}
            borderBottom={"1px solid lightgray"}
            outlineColor="white"
            placeholder="Add a Comment"
            onChange={handleComment}
          />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"flex-end"}>
          <Flex gap={"10px"}>
            <Button>Cancel</Button>
            <Button onClick={handleCommentSubmission}>Comment</Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex mb={"20px"} mt={"20px"} gap={"10px"} flexDirection={"column"} w={"95%"} m="auto">
        {comments.map((item) => {
          return (
            <Flex borderRadius={"10px"} p={"12px"} boxShadow={"dark-lg"} gap={"20px"}>
              <Avatar w={"30px"}  height="30px" src={item.profile} />
              <Text>{item.comment}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
