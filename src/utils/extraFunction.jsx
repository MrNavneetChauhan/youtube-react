import { Box, Tooltip } from "@chakra-ui/react";

export const Details = ({ icon, label }) => {
  return (
    <Tooltip
      w={"60px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"5px"}
      color={"white"}
      backgroundColor={"teal"}
      aria-label="A tooltip"
      label={label}
      
      borderRadius={"5px"}
    >
      <span>{icon}</span>
    </Tooltip>
  );
};
