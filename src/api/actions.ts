'use server';

import { redirect } from 'next/navigation';

import { revalidateTags } from '@/helpers';

import { createPost, deletePost, Post } from '.';

export const deletePostAction = async (id: number) => {
  await deletePost(id);
  revalidateTags(['posts', `post-${id}`]);
};

export const deletePostWithRedirectAction = async (id: number) => {
  await deletePost(id);
  revalidateTags(['posts', `post-${id}`]);
  redirect('/posts');
};

export const createPostAction = async (
  post: Omit<Post, 'id' | 'createdAt'>,
) => {
  await createPost(post);
  revalidateTags(['posts']);
};
