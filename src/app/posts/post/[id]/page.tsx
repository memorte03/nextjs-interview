import DeleteButton from './components/DeleteButton';
import { getPost } from '@/api';

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(+params.id);

  return (
    <div>
      <DeleteButton id={params.id} />
      <h1>{post.title}</h1>
      <span>{post.createdAt}</span>
      <p>{post.description}</p>
    </div>
  );
}
