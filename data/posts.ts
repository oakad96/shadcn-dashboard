import { Post } from "@/types/posts";

export const posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    body: "This is the first post",
    author: "John Doe",
    date: "2021-01-01",
    comments: [],
  },
  {
    id: "2",
    title: "Getting Started with React",
    body: "React is a powerful JavaScript library for building user interfaces. In this post, we'll cover the basics of React components, state management, and hooks.",
    author: "Jane Smith",
    date: "2021-01-15",
    comments: [
      {
        id: "c1",
        text: "Great introduction! Looking forward to more content.",
        username: "reactfan99",
      },
    ],
  },
  {
    id: "3",
    title: "TypeScript Best Practices",
    body: "TypeScript adds static typing to JavaScript, making your code more maintainable and catching errors early. Here are some best practices to follow.",
    author: "Mike Johnson",
    date: "2021-02-01",
    comments: [
      {
        id: "c2",
        text: "This helped me understand TypeScript better!",
        username: "typescript_dev",
      },
    ],
  },
  {
    id: "4",
    title: "Building Modern UIs with Tailwind CSS",
    body: "Tailwind CSS is a utility-first CSS framework that makes it easy to build beautiful, responsive user interfaces without writing custom CSS.",
    author: "Sarah Williams",
    date: "2021-02-15",
    comments: [
      {
        id: "c3",
        text: "Tailwind has changed how I style my applications",
        username: "css_master",
      },
    ],
  },
];
