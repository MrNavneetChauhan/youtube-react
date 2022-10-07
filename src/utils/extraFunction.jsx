import { Tooltip } from "@chakra-ui/react";

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

export const ShortenTitle = (title) => {
  if (title && title.length > 30) {
    return title.substring(0, 45) + "...";
  }
  return title;
};

export const shortenChannelName = (title) => {
  if (title && title.length > 25) {
    return title.substring(0, 30) + "...";
  }
  return title;
};

export const shortenDescription = (desc)=>{
  if(desc && desc.length > 200){
    return desc.substring(0,100)+"..."
  }
}
