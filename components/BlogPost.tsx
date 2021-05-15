import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export default function BlogPost({ children }: Props) {
  return (
    <>
      <Box color="white">{children}</Box>
    </>
  );
}
