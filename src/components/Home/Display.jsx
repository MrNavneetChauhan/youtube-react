import { Avatar, Box, Flex,HStack,Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import {useSelector,useDispatch} from "react-redux";
import { gettingVideosData } from "../../redux/vidoes/action";
import { shorteChannelName, ShortenTitle } from "../../utils/extraFunction";
export const Display = ()=>{
 const {urls} = useSelector((store)=>store.videosReducer)

const dispatch = useDispatch();
 useEffect(()=>{
    dispatch(gettingVideosData())
 },[])


    return (
        <Flex mt={"10px"} justifyContent={"center"} gap="20px" wrap={"wrap"}>
            {urls.map((video)=>{
                return (
                    <Box cursor={"pointer"}  width={"300px"}>
                        <Image h={"60%"} w={"100%"} src={video.url}/>
                        <Flex  h={"20%"} padding={"8px"} gap={"10px"} alignItems={"start"}>
                            <Avatar mt={"2px"} width={"35px"} height={"35px"} src=""/>
                            <Text fontWeight={"700"} fontSize={"14px"}>{ShortenTitle("Java script is invented by Brendon kile. I am checking the string length weather it will show good or not.")}</Text>
                        </Flex>
                        <Box  pl={"50px"} h={"20%"} >
                            <Text fontSize={"13px"} color="gray">{shorteChannelName("Channel Name Brother how are you dear iam fine")}</Text>
                            <HStack p={0}>
                                <Text fontSize={"13px"} color="gray">2.5M views •</Text>
                                <Text fontSize={"13px"} color="gray">1 year ago</Text>
                            </HStack>
                        </Box>
                    </Box>
                )
            })}
        </Flex>
    )
}