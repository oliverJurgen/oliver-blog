import React from "react";
import { Box } from "@chakra-ui/react";
import "github-markdown-css";

type Props = {
  children: React.ReactNode;
};

export default function BlogPost({ children }: Props) {
  return (
    <>
      <Box mb={10} className="markdown-body" color="white">
        {children}
      </Box>
    </>
  );
}
