import { Box, Flex, Grid, Image, Input,Show,Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { FaSearchDollar } from "react-icons/fa";
import { Details } from "../../utils/extraFunction";
import { SearchBar } from "./SearchBar";
export const Navbar = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      alignItems={"center"}
      height={"60px"}
      border={"1px solid lightgray"}
      borderTop={"none"}
    >
      <Flex alignItems={"center"} justifyContent={"center"} width={"50px"} height={"50px"} >
        <Image w={"100%"} h={"100%"} objectFit={"cover"} src="logo.png" />
        <Text fontWeight={800}>PLAY</Text>
      </Flex>
      <Show above="md">
     <SearchBar/>
      </Show>
      
      <Box>
        
      </Box>
    </Flex>
  );
};
