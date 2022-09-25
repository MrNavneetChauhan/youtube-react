import {Tooltip } from "@chakra-ui/react";

export const Details = ({ icon, label }) => {
  return (
    <Tooltip
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"5px"}
      color={"white"}
      backgroundColor={"teal"}
      aria-label="A tooltip"
      label={label}
      hasArrow
      borderRadius={"5px"}
      mt={"5px"}
    >
      <span>{icon}</span>
    </Tooltip>
  );
};
