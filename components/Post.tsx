import Link from "next/link";
import { Text, Box } from "@chakra-ui/react";
// import { HeadPost } from "./HeadPost";

type Props = {
  post: any;
};

export const Post = ({ post }: Props) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <Box mb={10}>
      <Link href={"/blog" + link}>
        <Text
          cursor="pointer"
          fontSize="1.5rem"
          fontWeight="500"
          color="#fd1d1d"
          mb={2}
        >
          {meta.title}
        </Text>
      </Link>

      <Box color="#fff" className="details">
        <Text textColor="#cfc6c6" mb={4}>
          {meta.description}
        </Text>
        <span>{meta.date}&nbsp; &nbsp; &nbsp;</span>
        {/* <span role="img" aria-label="one coffee">
          ☕ {meta.readTime + " min read"}
        </span> */}
      </Box>
    </Box>
  );
};

export default Post;
