'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { createPostAction } from '@/api';
import { TextArea, TextInput } from '@/ui';

type FormData = {
  title: string;
  description: string;
};

const schema = yup
  .object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
  })
  .required();

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    await createPostAction(data);
    router.push('/posts');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        id="title"
        label="Title"
        placeholder="Enter post title"
        {...register('title')}
        errorMessage={errors.title?.message}
      />
      <TextArea
        id="description"
        label="Description"
        placeholder="Enter post description"
        {...register('description')}
        errorMessage={errors.description?.message}
      />

      <button type="submit">Create new post</button>
    </form>
  );
}
