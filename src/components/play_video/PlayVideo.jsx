import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificVideoDetails } from "../../redux/playvideo/action";
import { gettingRelatedContent } from "../../redux/relatedvideos/action";
import { Loaders } from "../Loaders/Loaders";
import { RightSection } from "./RightSection";
import { Error } from "../Error/Error";
import { Title } from "./Title";
import { setToLocalStorage } from "../../utils/localStorage";
export const PlayVideo = () => {
  const { id } = useParams();
  const {
    isLoading,
    isError,
    details: { snippet, statistics },
    extraDetails,
  } = useSelector((store) => store.playVideoReducer);
  const { relatedVideos } = useSelector((store) => store.relatedVideoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecificVideoDetails(id));
    dispatch(gettingRelatedContent(id));
  }, [id]);

  return isLoading ? (
    <Loaders />
  ) : isError ? (
    <Error />
  ) : (
    <Flex
      flexDirection={["column", "column", "row"]}
      width={"99%"}
      border={"1px solid transparent"}
      m={"65px auto"}
      justifyContent={["center", "center", "space-between"]}
      gap={["10px", "10px", "0"]}
      
    >
      <Flex
        gap={"10px"}
        flexDirection={"column"}
        width={["100%", "100%", "63%"]}
      >
        <Box width={"100%"} height={["200px", "430px", "430px"]}>
          <iframe
            width={"100%"}
            height={"100%"}
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={"Youtube Video Player"}
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Box>
        <Title
          snippet={snippet}
          statistics={statistics}
          extraDetails={extraDetails}
        />
      </Flex>
      <Flex flexDirection={"column"} gap="15px" width={["100%", "100%", "35%"]}>
        {relatedVideos.map((item) => {
          return isLoading ? <Loaders /> : <RightSection item={item} />;
        })}
      </Flex>
    </Flex>
  );
};
