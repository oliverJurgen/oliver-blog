import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
export default function Header() {
  return (
    <Flex mt={14} mb={20}>
      <Link href="/">
        <a>
          <Text
            _hover={{
              color: "#f39c12",
            }}
            color="white"
            fontSize="24px"
            
          >
            Oliver's Blog
          </Text>
        </a>
      </Link>
    </Flex>
  );
}
