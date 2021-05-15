import Link from "next/link";
import { Flex, Text, Heading } from "@chakra-ui/react";
export default function Header() {
  return (
    <Flex justify="space-between" mt={14} mb={20}>
      <Text fontSize="24px" fontWeight="bold">
        <Link href="/">
          <a>
            <Heading color="white" type="2xl">
              Oliver's Blog
            </Heading>
          </a>
        </Link>
      </Text>
    </Flex>
  );
}
