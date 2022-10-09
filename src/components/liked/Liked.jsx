import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikingVideo,
  gettingLikedVideos,
} from "../../redux/favourite/action";
import { BiLock } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Loaders } from "../Loaders/Loaders";
import { Error } from "../Error/Error";
import { Link } from "react-router-dom";
export const Liked = () => {
  const { isLoading, isError, favourites } = useSelector(
    (store) => store.favouriteReducer
  );

  const { name, url } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingLikedVideos());
  }, []);

  const toast = useToast();

  return isLoading ? (
    <Loaders />
  ) : isError ? (
    <Error />
  ) : (
    <Flex
      justifyContent={["center", "center", "space-around"]}
      alignItems={["center", "center", "start"]}
      w={"100%"}
      m={"20px auto"}
      flexDirection={["column", "column", "row"]}
    >
      <Flex flexDirection={"column"} width={["95%", "95%", "30%"]}>
        <Box position={"relative"} w={"100%"}>
          <Image w={"100%"} src={favourites[0]?.video_thumbnail} />
          <Flex
            alignItems={"center"}
            justifyContent="center"
            background={"rgba(0, 0, 0, 0.678)"}
            position={"absolute"}
            w="100%"
            p="5px"
            color={"white"}
            bottom={0}
          >
            Play All
          </Flex>
        </Box>
        <Box>
          <Text fontWeight={"600"} fontSize={"20px"}>
            Liked Videos
          </Text>
          <Flex gap={"5px"} fontSize={"14px"} color="gray">
            <Text>{favourites.length} videos</Text>
            <Text>•</Text>
            <Text>No Views</Text>
            <Text>•</Text>
            <Text>{"Updated 6 days agao"}</Text>
          </Flex>
          <Button
            mt={"10px"}
            border={"none"}
            fontSize={"12px"}
            leftIcon={<BiLock />}
          >
            Private
          </Button>
          <Divider mt={"10px"} />
          <Flex mt={"10px"} gap={"10px"} alignItems={"center"}>
            <Avatar src={url} width={"40px"} height="40px" />
            <Text fontWeight={"600"}>{name}</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        padding={"10px"}
        w={["100%", "100%", "65%"]}
        flexDirection="column"
        gap={"10px"}
      >
        {favourites.map((item, index) => {
          return (
            <Flex
              p={"10px"}
              background={"#E5E5E5"}
              gap={"10px"}
              justifyContent={"space-between"}
              w="100%"
            >
              <Link className="link-o" to={`/play_video/${item?.video_id}`}>
                <Flex
                  justifyContent={"space-between"}
                  width={["30%", "30%", "22%"]}
                  alignItems={"center"}
                >
                  <Text mr={"5px"} fontWeight={"600"}>{index + 1}</Text>
                  <Box position={"relative"} h={"100%"}>
                    <Image
                      objectFit={"cover"}
                      h={"100%"}
                      src={item?.video_thumbnail}
                    />
                    <Text
                      width={"40px"}
                      position="absolute"
                      bottom={1}
                      right={1}
                      textAlign="center"
                      background={"teal"}
                      color="white"
                      borderRadius={"5px"}
                      fontSize={"12px"}
                    >
                      {item?.duration}
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={"2px"} flexDirection={"column"} w={"75%"}>
                  <Text fontSize={["13px", "15px", "15px"]}>
                    {item?.video_title}
                  </Text>
                  <Text fontSize={"13px"} color="gray">
                    {item?.channel_title}
                  </Text>
                </Flex>
              </Link>
              <Flex
                border={"1px solid gray"}
                borderRadius={"50%"}
                alignItems={"center"}
                height={"100%"}
                _hover={{background:"rgba(0, 0, 0, 0.589)"}}
              >
                <AiFillDelete
                  cursor={"pointer"}
                  fontSize={"25px"}
                  onClick={() => {
                    dispatch(dislikingVideo(toast, item._id));
                  }}
                />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
