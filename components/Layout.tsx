import React from "react";
import Head from "next/head";
import Header from "./Header";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
  description: string;
};

export default function Layout({ children, pageTitle, description }: Props) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <Flex
        pos="absolute"
        left="0"
        top="0"
        bg="#710303"
        flexDir="column"
        minH="100%"
        minW="60px"
        py={4}
        align="center"
        d={{ base: "none", md: "flex" }}
      >
        <Icon
          as={AiFillHome}
          fontSize="32px"
          color="gray.100"
          cursor="pointer"
          _hover={{
            transform: "scale(1.1)",
          }}
          onClick={() => router.push("/")}
        />
      </Flex>
      <Box maxW="720px" mx="auto" px="1rem">
        <Header />
        <Box minH="100vh">{children}</Box>
      </Box>
    </>
  );
}
