import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, Newspaper, User, MessageCircle } from "lucide-react";
import PostsTable from "@/components/posts/PostsTable";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard title="Posts" count={100} icon={<Newspaper />} />
        <DashboardCard title="Categories" count={12} icon={<Folder />} />
        <DashboardCard title="Users" count={750} icon={<User />} />
        <DashboardCard title="Comments" count={300} icon={<MessageCircle />} />
      </div>
      <PostsTable limit={5} />
    </>
  );
}
