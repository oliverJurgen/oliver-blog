import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";

export default function Header() {
  return (
    <Flex mt={14} mb={20}>
      <Link href="/">
        <a>
          <Text
            bgGradient="linear(90deg, rgba(180,58,119,1) 0%, rgba(253,29,29,1) 50%, rgba(252,178,69,1) 79%)"
            css={css`
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
            fontSize="40px"
          >
            Blog
          </Text>
          <Text color="gray.400">Anything under the sun :)</Text>
        </a>
      </Link>
    </Flex>
  );
}
