'use client';

import Link from 'next/link';

import { deletePostAction, Post } from '@/api';

import styles from './index.module.scss';

interface PostCardProps extends Post {}
export default function PostCard({ id, description, title }: PostCardProps) {
  const handleDeletePost = async () => {
    deletePostAction(id);
  };

  return (
    <li className={styles['container']}>
      <Link className={styles['card']} href={`/posts/post/${id}`}>
        {title} - {description}
      </Link>
      <button onClick={handleDeletePost} type="button">
        Delete me
      </button>
    </li>
  );
}
