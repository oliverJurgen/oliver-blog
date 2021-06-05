import { Post } from "../components/Post";
// import { posts } from "utils/getAllPosts";
import { posts } from "utils/getAllPosts";

export default function IndexPage() {
  return (
    <>
      {posts.map((post: any) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
