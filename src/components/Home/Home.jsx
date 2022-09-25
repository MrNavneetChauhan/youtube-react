import { Box, Flex, Show } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Text } from "@chakra-ui/react";
import { SideBar } from "./SibeBar";
import { Display } from "./Display";
import { Footer } from "../Footer/Footer";
export const Home = () => {
  let tags = [
    "All",
    "Gaming",
    "Music",
    "JavaScript",
    "Python",
    "T-Series",
    "Gym",
    "Motivation",
    "Programmers",
    "Best Project",
    "Top Songs",
    "Top Movies",
  ];

  

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
              justifyContent={"center"}
              gap={"15px"}
              p={"10px"}
              borderBottom={"1px solid lightgray"}
            >
              {tags.map((item) => {
                return (
                  <Box
                    background={"#F2F2F2"}
                    color={"black"}
                    padding={"2px 10px 2px 10px"}
                    borderRadius={"35px"}
                    border={"1px solid lightgray"}
                    cursor={"pointer"}
                    title={item}
                  >
                    {item}
                  </Box>
                );
              })}
            </Flex>
          </Show>
          {/* display-section */}
          <Display />
        </Box>
      </Flex>
    </Box>
  );
};
