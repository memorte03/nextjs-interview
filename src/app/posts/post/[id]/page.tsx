import dayjs from 'dayjs';

import DeleteButton from './components/DeleteButton';
import { getPost } from '@/api';

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(+params.id);
  const formattedDate = dayjs(post.createdAt).format('D of MMMM YYYY');

  return (
    <div>
      <DeleteButton id={params.id} />
      <h1>{post.title}</h1>
      <span>{formattedDate}</span>
      <p>{post.description}</p>
    </div>
  );
}
