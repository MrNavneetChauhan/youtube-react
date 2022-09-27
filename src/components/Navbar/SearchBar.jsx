import { Flex, Grid, Input } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { FaSearchDollar } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { SearchContext } from "../../context/SearchContext";
import { Details } from "../../utils/extraFunction";

export const SearchBar = ({colorMode}) => {
  const { icon, showSearchIcon } = useContext(SearchContext);

  return (
    <Flex ml={"10px"} h={"100%"} alignItems={"center"} w={"50%"}>
      {icon ? (
        <Grid
          placeContent={"center"}
          height={"65%"}
          border={`1px solid ${colorMode === "light" ? "lightgray" : "#313131"}`}
          borderRight={"none"}
          w={"8%"}
        >
          <FaSearchDollar />
        </Grid>
      ) : (
        ""
      )}
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
        border={`1px solid ${colorMode === "light" ? "lightgray" : "#313131"}`}
        borderRight={"none"}
        borderLeft={icon ? "none" : `1px solid ${colorMode === "light" ? "lightgray" : "#313131"}`}
        borderRadius={0}
        fontSize={"18px"}
        w={icon ? "72%" : "80%"}
        focusBorderColor={"none"}
        placeholder="Search"
        h={"65%"}
      />
      <Grid
        m={0}
        p={0}
        placeContent={"center"}
        w={"10%"}
        h={"65%"}
        border={`1px solid ${colorMode === "light" ? "lightgray" : "#313131"}`}
        _hover={{ bg: "lightgray", opacity: "0.5", cursor: "pointer" }}
      >
        <Details icon={<FcSearch fontSize={"25px"} />} label="search" />
      </Grid>
    </Flex>
  );
};
