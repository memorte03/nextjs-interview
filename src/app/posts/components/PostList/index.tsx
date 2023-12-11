'use server';

import PostCard from './PostCard';
import { getPosts } from '@/api';

export default async function PostList() {
  const posts = await getPosts();

  return (
    <>
      <ul>
        {posts.map((post) => (
          <PostCard {...post} key={post.id} {...post} />
        ))}
      </ul>
    </>
  );
}
