import React from "react";
import { Box } from "@chakra-ui/react";
import "github-markdown-css";
import { css } from "@emotion/react";
import theme from "styles/theme";
const bodyFont = theme.fonts.body;
console.log({ bodyFont });

type Props = {
  children: React.ReactNode;
};

export default function BlogPost({ children }: Props) {
  return (
    <>
      <Box
        mb={10}
        color="white"
        p={0}
        m={0}
        css={css`
          .markdown-body {
            color: #fff;
            font-family: ${bodyFont} !important;
            font-size: 18px;
          }
          .markdown-body p {
            color: #fff;
            line-height: 40px;
          }
          .prism-code {
            font-size: 16px;
          }
        `}
      >
        <Box className="markdown-body" pb="60px">
          {children}
        </Box>
      </Box>
    </>
  );
}
