import { Text, Avatar, Box, Button, Flex, Divider } from "@chakra-ui/react";
import {MdOutlineSort} from "react-icons/md"
export const Comment = () => {
  return (
    <Flex flexWrap={"wrap"} gap={"10px"} flexDirection={"column"} w={"100%"}>
      <Flex alignItems={"center"} w={"100%"} justifyContent={"space-between"}>
        <Flex p={"0 5px 0 5px"}  alignItems={"center"} gap={"18px"}>
          <Avatar src="" />
          <Box>
            <Text fontSize={"14px"} fontWeight={"600"}>
              Shemaroo Tv
            </Text>
            <Text color={"gray"} fontSize={"14px"}>
              4.11M Subscribers
            </Text>
          </Box>
        </Flex>
        <Button borderRadius={"none"} colorScheme={"red"}>
          Subscribe
        </Button>
      </Flex>
      <Flex flexWrap={"wrap"}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti
        veritatis corrupti dolorem ut? Ratione voluptatibus iste eligendi
        voluptate, sapiente sequi adipisci a tempore nulla, soluta possimus
        deserunt amet odit consectetur perspiciatis, modi architecto distinctio!
        Quis vel impedit maiores distinctio inventore quasi corrupti, a ut magni
        unde suscipit quisquam iure porro commodi omnis explicabo dolorem
        quibusdam delectus nemo accusamus in voluptatum, incidunt pariatur
        tempora. Ipsa totam tempora similique incidunt repudiandae ratione
        blanditiis. Nulla saepe quo id, consequatur tempore dicta, libero itaque
        sed ut sint, voluptas distinctio eius blanditiis iste harum laborum?
        Possimus aperiam odit nam exercitationem suscipit? Ratione dolorem
        necessitatibus sequi exercitationem voluptate veritatis quibusdam
        dolorum commodi eius, laboriosam laborum laudantium ex dicta harum
      </Flex>
      <Divider/>
      <Flex >
        <Flex gap={"80px"}>
            <Text>
            292 Comments
            </Text>
            <Flex alignItems={"center"}>
                <MdOutlineSort/>
                <Text>Sort By</Text>
            </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
