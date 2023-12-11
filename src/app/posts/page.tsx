import { Suspense } from 'react';

import Header from './components/Header';
import PostList from './components/PostList';
import PostListLoading from './components/PostList/loading';

export default async function Posts() {
  return (
    <div>
      <Header />
      <Suspense fallback={<PostListLoading />}>
        <PostList />
      </Suspense>
    </div>
  );
}
