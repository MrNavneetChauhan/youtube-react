import { Box, Flex, Show, Skeleton } from "@chakra-ui/react";
import { SideBar } from "./SibeBar";
import { Display } from "./Display";
import { useContext, useEffect, useState } from "react";
import { ColorContext } from "../../context/ColorContext";
import { useDispatch, useSelector } from "react-redux";
import { gettingVideosData, searchedVideos } from "../../redux/videos/action";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loaders } from "../Loaders/Loaders";

export const Home = () => {
  const { colorMode } = useContext(ColorContext);
  const [search, setSearch] = useState("All");
  const dispatch = useDispatch();
  const { video_data, searchParam, isLoading, isError } = useSelector(
    (store) => store.videosReducer
  );
  useEffect(() => {
    dispatch(gettingVideosData());
  }, []);

  let tags = [
    "All",
    "Gaming",
    "React Native",
    "JavaScript",
    "Python",
    "T-Series",
    "Gym",
    "Motivation",
    "Coding",
    "Top Songs",
    "Top Movies",
    "lol",
  ];

  const handleTags = (item) => {
    setSearch(item);
    if (item === "All") {
      dispatch(gettingVideosData());
    } else {
      dispatch(searchedVideos(item));
    }
  };

  const fetchData = () => {
    if (searchParam === "All") {
      dispatch(gettingVideosData());
    } else {
      dispatch(searchedVideos(searchParam));
    }
  };

  return (
    <Box>
      <Flex>
        {/* side bar */}
        <Show above="md">
          <SideBar />
        </Show>
        {/* main container */}
        <Box w={"94%"}>
          <Show above="md">
            <Flex
              flexWrap={"wrap"}
              alignItems={"center"}
              justifyContent={"flex_start"}
              gap={"15px"}
              p={"8px"}
              borderBottom={`1px solid ${
                colorMode === "light" ? "lightgray" : "#313131"
              }`}
            >
              {tags.map((item, index) => {
                return (
                  <Box
                    background={"#F2F2F2"}
                    color={"black"}
                    padding={"1px 10px 1px 10px"}
                    borderRadius={"35px"}
                    border={"1px solid lightgray"}
                    cursor={"pointer"}
                    title={item}
                    key={index}
                    onClick={() => handleTags(item)}
                  >
                    {item}
                  </Box>
                );
              })}
            </Flex>
          </Show>
          {/* display-section */}
          <Box mt={"10px"} w={"100%"}>
            <InfiniteScroll
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
              dataLength={video_data.length}
              next={fetchData}
              hasMore={true}
              loader={<Skeleton background={"black"} />}
            >
              {video_data.map((item, index) => {
                return <Display key={index} {...item} />;
              })}
            </InfiniteScroll>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
