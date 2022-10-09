import { Box, Flex, Grid, Input, Show, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaSearchDollar } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { ShowSearchContext } from "../../context/showSearch";
import { useThrottle } from "../../hooks/useThrottle";
import { gettingSearchData } from "../../redux/search/action";
import { Details } from "../../utils/extraFunction";

export const SearchBar = ({ colorMode }) => {
  const { icon, showSearchIcon } = useContext(SearchContext);
  const {show,settingShow} = useContext(ShowSearchContext)
  const { isLoading, isError, searchData } = useSelector(
    (store) => store.searchReducer
  );
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    setText(e.target.value);
  };
  const throttle = useThrottle(text, 200);

  useEffect(() => {
    dispatch(gettingSearchData(throttle));
  }, [throttle]);



  return (
    <>
      <Flex ml={"10px"} h={"100%"} alignItems={"center"} w={"50%"}>
        {icon ? (
          <Grid
            placeContent={"center"}
            height={"65%"}
            border={`1px solid ${
              colorMode === "light" ? "lightgray" : "#313131"
            }`}
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
            settingShow(true);
          }}
          onBlur={() => {
            showSearchIcon(false);
            settingShow(false)
          }}
          onChange={handleSearch}
          cursor={"pointer"}
          outline={"none"}
          type={"search"}
          m={0}
          pl={"10px"}
          border={`1px solid ${
            colorMode === "light" ? "lightgray" : "#313131"
          }`}
          borderRight={"none"}
          borderLeft={
            icon
              ? "none"
              : `1px solid ${colorMode === "light" ? "lightgray" : "#313131"}`
          }
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
          border={`1px solid ${
            colorMode === "light" ? "lightgray" : "#313131"
          }`}
          _hover={{ bg: "lightgray", opacity: "0.5", cursor: "pointer" }}
        >
          <Details icon={<FcSearch fontSize={"25px"} />} label="search" />
        </Grid>
      </Flex>
      <Show above="sm">
        {show ? (
          <Flex
            overflow={"auto"}
            flexDirection={"column"}
            gap="10px"
            padding={"10px"}
            position={"absolute"}
            left={"25%"}
            zIndex={"2"}
            height={"500px"}
            background="white"
            w={"40%"}
            top={"50"}
            onFocus={()=>{
              settingShow(true)
            }}
            
          >
            {" "}
            {searchData.map((item, index) => {
              const id = item?.id?.videoId || item.id
              return (
                <Link
                  className="search_link"
                  to={`search/${id}`}
                  key={index}
                  color="black"
                  onClick={()=>{
                    settingShow(false)
                  }}
                >
                  {item.snippet.title}
                </Link>
              );
            })}
          </Flex>
        ) : (
          ""
        )}
      </Show>
    </>
  );
};
