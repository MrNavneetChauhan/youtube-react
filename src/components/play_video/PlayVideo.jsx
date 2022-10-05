import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificVideoDetails } from "../../redux/playvideo/action";
import { RightSection } from "./RightSection";
import { Title } from "./Title";
export const PlayVideo = () => {
  const { id } = useParams();
  const {isLoading,isError,details:{snippet,statistics},extraDetails} = useSelector((store)=>store.playVideoReducer);
  const dispatch = useDispatch()
  console.log("extra",extraDetails)
    useEffect(()=>{
      dispatch(getSpecificVideoDetails(id))
    },[])

  return (
    <Flex
      flexDirection={["column", "column", "row"]}
      width={"99%"}
      border={"1px solid transparent"}
      m={"30px auto"}
      justifyContent={["center", "center", "space-between"]}
      gap={["10px", "10px", "0"]}
    >
      <Flex gap={"10px"} flexDirection={"column"} border={"1px solid red"} width={["100%", "100%", "63%"]}>
        <Box
          width={"100%"}
          height={["200px", "430px", "430px"]}
          border={"5px solid black"}
        >
          <iframe
            width={"100%"}
            height={"100%"}
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={"Youtube Video Player"}
            allowFullScreen
            allow="autoplay"
          ></iframe>
        </Box>
        <Title snippet = {snippet} statistics={statistics} extraDetails={extraDetails}/>
      </Flex>
      <Flex border={"1px solid red"} width={["100%", "100%", "35%"]}>
        <RightSection snippet = {snippet} statistics={statistics} extraDetails={extraDetails} />
      </Flex>
    </Flex>
  );
};
