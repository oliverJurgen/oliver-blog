import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";

export default function Header() {
  return (
    <Flex mt={14} mb={20}>
      <Link href="/">
        <a>
          <Text
            bgGradient="linear(to-r, #72f, #c1b 20%)"
            css={css`
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
            fontSize="30px"
          >
            Writing
          </Text>
          <Text color="gray.400">
            Anything under the sun  :)
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
