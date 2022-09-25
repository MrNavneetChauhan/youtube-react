import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Text,
  HStack,
  Image,
  Input,
  Show,
  useColorMode,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { BiMenu, BiVideoPlus } from "react-icons/bi";
import { BsFillMoonStarsFill, BsSearch, BsSun } from "react-icons/bs";
import { AiFillLike, AiFillPlaySquare, AiOutlineBell } from "react-icons/ai";
import { Details } from "../../utils/extraFunction";
import { FaMicrophoneAlt, FaMobile } from "react-icons/fa";
import { GiMultiDirections } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoLogoPlaystation } from "react-icons/io";
import {MdSubscriptions, MdVideoLibrary, MdWatchLater} from "react-icons/md";
import {FaHistory} from "react-icons/fa";
export const Navbar = () => {
  const [flag, setFlag] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      p={["0 5px 0 5px", "0 5px 0 5px", "0 15px 0 15px"]}
      height={"60px"}
      boxShadow={"md"}
      borderTop={"none"}
      w="100%"
    >
      {flag ? (
        <>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            p={"5px"}
            width={"180px"}
            height={"50px"}
            gap={"20px"}
          >
            <Show above="md">
              <BiMenu
                onClick={onOpen}
                cursor={"pointer"}
                fontWeight={200}
                color={"teal"}
                fontSize={"25px"}
              />
            </Show>
            <Flex w={"110px"} alignItems={"center"}>
              <Image
                title="YouTube Home"
                color={"black"}
                cursor={"pointer"}
                w={"98%"}
                h={"90%"}
                ml={["-15px", "0", "0"]}
                objectFit={"contain"}
                src="logo.png"
                background={"white"}
                p={"5px"}
                borderRadius={"5px"}
              />
              <sup style={{ marginLeft: "3px" }}>IN</sup>
            </Flex>
          </Flex>
          <Show above="md">
            <SearchBar colorMode={colorMode} />
          </Show>

          <Flex alignItems={"center"} gap={["18px", "40px", "30px"]}>
            <Show below="md">
              <Details
                icon={<FaMobile onClick={toggleColorMode} fontSize={"25px"} />}
                label="Sharing"
              />
            </Show>

            <Show above="md">
              <Details
                icon={
                  colorMode === "light" ? (
                    <BsFillMoonStarsFill
                      fontSize={"21px"}
                      cursor={"pointer"}
                      onClick={toggleColorMode}
                    />
                  ) : (
                    <BsSun
                      fontSize={"21px"}
                      cursor={"pointer"}
                      onClick={toggleColorMode}
                    />
                  )
                }
                label={colorMode === "dark" ? "Light Mode" : "Dark Mode"}
              />
            </Show>

            <Details
              icon={<BiVideoPlus cursor={"pointer"} fontSize={"25px"} />}
              label="Create"
            />
            <Details
              icon={<AiOutlineBell cursor={"pointer"} fontSize={"25px"} />}
              label="Notification"
            />
            <Show below="md">
              <Details
                icon={
                  <BsSearch
                    onClick={() => {
                      setFlag(false);
                    }}
                    fontSize={"20px"}
                  />
                }
                label="Search"
              />
            </Show>
            <Avatar
              w={["30px", "30px", "40px"]}
              h={["30px", "30px", "40px"]}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </Flex>
        </>
      ) : (
        <Flex gap={"10px"} width={"100%"}>
          <Grid placeContent={"center"} width={"10%"}>
            <AiOutlineArrowLeft
              onClick={() => {
                setFlag(true);
              }}
              fontSize={"20px"}
            />
          </Grid>
          <Input
            fontSize={"18px"}
            borderRadius={"none"}
            placeholder="Search YouTube"
          />
          <Grid
            border={"1px solid #313131"}
            borderRadius={"50%"}
            placeContent={"center"}
            background={"lightgray"}
            width={"50px"}
            h={"40px"}
            mr={"5px"}
          >
            <FaMicrophoneAlt fontSize={"20px"} />
          </Grid>
        </Flex>
      )}

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent padding={"20px"}>
          <DrawerHeader
            boxShadow={"base"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <BiMenu onClick={onClose} cursor="pointer" fontSize={"25px"} />
            <Image
              background={"white"}
              padding={"5px"}
              borderRadius={"5px"}
              w={"100px"}
              src="logo.png"
            />
          </DrawerHeader>

          <DrawerBody
            overflow={"auto"}
            m={0}
            p={0}
            display={"flex"}
            flexDirection={"column"}
            gap={"15px"}
          >
            <HStack
              p={"8px 30px 8px 30px"}
              w={"100%"}
              gap={"10px"}
              cursor={"pointer"}
              _hover={{ background: "#e7e0e0" }}
              mt={"8px"}
            >
              <BiMenu fontSize={"21px"} />
              <Text>Home</Text>
            </HStack>

            <HStack
              p={"8px 30px 8px 30px"}
              w={"100%"}
              gap={"10px"}
              cursor={"pointer"}
              _hover={{ background: "#e7e0e0" }}
            >
              <GiMultiDirections fontSize={"21px"} />
              <Text>Explore</Text>
            </HStack>

            <HStack
              p={"8px 30px 8px 30px"}
              w={"100%"}
              gap={"10px"}
              cursor={"pointer"}
              _hover={{ background: "#e7e0e0" }}
            >
              <IoLogoPlaystation fontSize={"21px"} />
              <Text>Shorts</Text>
            </HStack>

            <HStack
              p={"8px 30px 8px 30px"}
              w={"100%"}
              gap={"10px"}
              cursor={"pointer"}
              _hover={{ background: "#e7e0e0" }}
            >
              <MdSubscriptions fontSize={"21px"} />
              <Text>Subscriptions</Text>
            </HStack>
            <Divider />
            <HStack
              p={"8px 30px 8px 30px"}
              w={"100%"}
              gap={"10px"}
              cursor={"pointer"}
              _hover={{ background: "#e7e0e0" }}
            >
              <MdVideoLibrary fontSize={"21px"} />
              <Text>Library</Text>
            </HStack>

            <HStack
              p={"8px 30px 8px 30px"}
              w={"100%"}
              gap={"10px"}
              cursor={"pointer"}
              _hover={{ background: "#e7e0e0" }}
            >
              <FaHistory fontSize={"21px"} />
              <Text>History</Text>
            </HStack>

            <HStack
              p={"8px 30px 8px 30px"}
              w={"100%"}
              gap={"10px"}
              cursor={"pointer"}
              _hover={{ background: "#e7e0e0" }}
            >
              <AiFillPlaySquare fontSize={"21px"} />
              <Text>Your Videos</Text>
            </HStack>

            <HStack
              p={"8px 30px 8px 30px"}
              w={"100%"}
              gap={"10px"}
              cursor={"pointer"}
              _hover={{ background: "#e7e0e0" }}
            >
              <MdWatchLater fontSize={"21px"} />
              <Text>Watch Later</Text>
            </HStack>

            <HStack
              p={"8px 30px 8px 30px"}
              w={"100%"}
              gap={"10px"}
              cursor={"pointer"}
              _hover={{ background: "#e7e0e0" }}
            >
              <AiFillLike fontSize={"21px"} />
              <Text>Liked Videos</Text>
            </HStack>

              <Divider/>
              <Flex direction={"column"} gap={"5px"}>
              <Flex w={"100%"} justifyContent={"left"} flexWrap={"wrap"}>
                <Text>About</Text>
                <Text>Press</Text>
                <Text>Copyright</Text>
              </Flex>

              <Flex   w={"100%"} justifyContent={"left"} flexWrap={"wrap"}>
                <Text>Contact us</Text>
                <Text>Creator</Text>
                <Text>Adverise</Text>
                <Text>Developers</Text>
              </Flex>

              <Flex w={"100%"} justifyContent={"left"} flexWrap={"wrap"}>
                <Text>Term</Text>
                <Text>Privacy</Text>
                <Text>Policy & Saftey</Text>
                <Text>How Youtube Works</Text>
                <Text>Test New Feature</Text>
              </Flex>
              </Flex>
              

          </DrawerBody>

          <DrawerFooter background={"teal"} color={"white"} borderRadius={"5px"} padding={"5px"} w={"100%"}  display={"flex"} justifyContent={"center"}>
            <Text>Made With ❤️ By Navneet Chauhan</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
