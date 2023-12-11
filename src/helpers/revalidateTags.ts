import { revalidateTag } from 'next/cache';

export default function revalidateTags(tags: string[]) {
  tags.forEach((tag) => {
    revalidateTag(tag);
  });
}
