export default async function fetchApi<T>(
  resourceUrl: string,
  init?: RequestInit,
): Promise<T> {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_KEY || !API_URL) {
    throw new Error('Please specify the public api key and url in .env!');
  }

  const defaultHeaders = {
    'x-api-key': API_KEY as string,
    'Content-Type': 'application/json',
  };

  const combinedHeaders = init?.headers
    ? { ...defaultHeaders, ...init.headers }
    : defaultHeaders;

  const res = await fetch(`${API_URL}${resourceUrl}`, {
    ...init,
    headers: combinedHeaders,
  });

  if (!res.ok) {
    throw new Error(`Network response was not ok! ${API_URL}${resourceUrl}`);
  }

  return res.json() as Promise<T>;
}
