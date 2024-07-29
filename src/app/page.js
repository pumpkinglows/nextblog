import PostList from "@/shared/components/post/list/List";
import { getPostList } from "@/shared/lib/post";

async function RootPage() {
  const postList = await getPostList();

  return (
      <PostList postList={postList} />
  );
}

export default RootPage;
