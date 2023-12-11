export type Post = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
};

export type GetPostsReturn = Post[];
export type GetPostReturn = Post;
export type DeletePostReturn = void;
