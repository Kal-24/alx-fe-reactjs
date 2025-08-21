import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = (page) =>
  axios
    .get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
    .then((res) => res.data);

export default function PostsComponent() {
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery(['posts', page], () => fetchPosts(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts - Page {page}</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>

      <button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
        Previous
      </button>

      <button onClick={() => setPage((old) => old + 1)} disabled={isFetching}>
        Next
      </button>

      {isFetching && !isLoading ? <p>Loading new page...</p> : null}
    </div>
  );
}
