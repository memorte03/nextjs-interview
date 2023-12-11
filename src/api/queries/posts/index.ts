import { DeletePostReturn, GetPostReturn, GetPostsReturn, Post } from './types';
import { fetchAPI } from '@/api';

export const getPosts = () =>
  fetchAPI<GetPostsReturn>('posts', { next: { tags: ['posts'] } });

export const getPost = (id: number) =>
  fetchAPI<GetPostReturn>(`posts/${id}`, { next: { tags: [`post-${id}`] } });

export const deletePost = (id: number) =>
  fetchAPI<DeletePostReturn>(`posts/${id}`, { method: 'DELETE' });

export const createPost = (post: Omit<Post, 'id' | 'createdAt'>) =>
  fetchAPI<Post>('posts', {
    method: 'POST',
    body: JSON.stringify(post),
  });
