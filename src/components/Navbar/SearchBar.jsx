import { Flex, Grid, Input } from '@chakra-ui/react';
import React from 'react'
import { useContext } from 'react';
import { FaSearchDollar } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
import { SearchContext } from '../../context/SearchContext';
import { Details } from '../../utils/extraFunction';

export const SearchBar = () => {

    const {icon,showSearchIcon} = useContext(SearchContext);

  return (
    <Flex h={"100%"} alignItems={"center"} w={"50%"}>
    {icon ?<Grid
      placeContent={"center"}
      height={"60%"}
      border={"1px solid lightgray"}
      borderRight={"none"}
      w={"8%"}
    >
        <FaSearchDollar />
    </Grid>:""}
    <Input
      onFocus={() => {
        showSearchIcon(true);
      }}
      onBlur={() => {
        showSearchIcon(false);
      }}
      cursor={"pointer"}
      outline={"none"}
      type={"search"}
      m={0}
      pl={"10px"}
      border={"1px solid lightgray"}
      borderRight={"none"}
      borderLeft={icon ? "none":"1px solid lightgray"}
      borderRadius={0}
      fontSize={"18px"}
      w={icon?"82%":"90%"}
      focusBorderColor={"none"}
      h={"60%"}
    />
    <Grid
      m={0}
      p={0}
      placeContent={"center"}
      w={"10%"}
      h={"60%"}
      border={"1px solid lightgray"}
      _hover={{ bg: "lightgray", opacity: "0.5", cursor: "pointer" }}
    >
      <Details icon={<FcSearch fontSize={"25px"} />} label="search" />
    </Grid>
  </Flex>
  )
}
