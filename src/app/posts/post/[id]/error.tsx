'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.message}</p>
    </div>
  );
}
