import { Post } from "../components/Post";
// import { posts } from "utils/getAllPosts";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  console.log("HELLO");
  return (
    <>
      {posts.map((post: any) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
