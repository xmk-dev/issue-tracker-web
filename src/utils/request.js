export default async (
  url,
  method = 'GET',
  body = {},
  options = {},
  headers = {},
) => {
  const res = await fetch(
    url,
    {
      ...options,
      headers: {
        ...headers,
      },
      method,
      body: method === 'GET' || method === 'HEAD' ? null : JSON.stringify(body),
    },
  );

  return res.ok ? res.json() : res.text();
};
