'use client';

import { useRouter } from 'next/navigation';

import { deletePostWithRedirectAction } from '@/api';

interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();
  const handleDeletePost = async () => {
    deletePostWithRedirectAction(+id);
  };

  return (
    <div>
      <button onClick={handleDeletePost} type="button">
        Delete me
      </button>
    </div>
  );
}
