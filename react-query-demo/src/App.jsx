import React from 'react';
import PostsComponent from './components/PostsComponent';

export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <PostsComponent />
    </div>
  );
}import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;

