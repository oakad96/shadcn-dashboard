import PostsTable from "@/components/posts/PostsTable";
import { BackButton } from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";

export default function PostsPage() {
  return (
    <>
      <BackButton text="Back" link="/" />
      <PostsTable />
      <PostPagination />
    </>
  );
}
