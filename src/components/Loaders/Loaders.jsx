import { Skeleton, Stack } from "@chakra-ui/react";

export const Loaders = () => {
  return (
    <Stack>
      <Skeleton width="300px" height="120px" />
      <Skeleton width="300px" height="120px" />
      <Skeleton width="300px" height="120px" />
    </Stack>
  );
};
