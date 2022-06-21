import React from "react";
import Head from "next/head";
import Header from "./Header";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
  description: string;
};

export default function Layout({ children, pageTitle, description }: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>

      <Box maxW="720px" mx="auto" px="1rem">
        <Header />
        <Box minH="100vh">{children}</Box>
      </Box>
    </>
  );
}
