interface User {
  id: number;
  username: string;
}
interface Post {
  postId: number;
  creatorId: number;
  title: string;
  content: string;
  createdAt: number;
}

export const users: User[] = [
  { id: 1, username: "zzoo" },
  { id: 2, username: "good" },
  { id: 3, username: "fuck" },
  { id: 4, username: "done" },
];

export const posts: Post[] = [
  {
    postId: 1,
    creatorId: 1,
    title: "제목",
    content: "내용입니다.",
    createdAt: 1234,
  },
  {
    postId: 1,
    creatorId: 1,
    title: "제목",
    content: "내용입니다.",
    createdAt: 1234,
  },
  {
    postId: 1,
    creatorId: 1,
    title: "제목",
    content: "내용입니다.",
    createdAt: 1234,
  },
];
