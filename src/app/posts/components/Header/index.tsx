'use client';
import Link from 'next/link';

import styles from './index.module.scss';

export default function Header() {
  return (
    <div>
      <div className={styles['row-container']}>
        <h1>Posts</h1>
        <Link href="/posts/create">Create a post</Link>
      </div>
      <hr />
    </div>
  );
}
