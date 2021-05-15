import Link from "next/link";
import { HeadPost } from "./HeadPost";

type Props = {
  post: any;
};

export const Post = ({ post }: Props) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article>
      <HeadPost meta={meta} />
      <Link href={"/blog" + link}>
        <a>Read more →</a>
      </Link>
    </article>
  );
};

export default Post
