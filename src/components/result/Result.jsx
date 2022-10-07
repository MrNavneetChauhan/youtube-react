import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { gettingRelatedContent } from "../../redux/relatedvideos/action";
import { Error } from "../Error/Error";
import { Loaders } from "../Loaders/Loaders";
import { ContentBox } from "./ContentBox";

export const Result = () => {
  const { id } = useParams();
  const { isLoading, isError, relatedVideos } = useSelector(
    (store) => store.relatedVideoReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingRelatedContent(id));
  }, [id]);

  return isLoading? <Loaders/>: isError ? <Error/> : (
    <Flex gap={"30px"} flexDirection={"column"} w={"92%"} m="20px auto" >
      {relatedVideos.map((item) => {
        return isLoading ? <Loaders/> : <ContentBox item={item} />;
      })}
    </Flex>
  );
};
