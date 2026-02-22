import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // ✅ Cache settings (assignment requires this)
    cacheTime: 1000 * 60 * 5, // 5 minutes cache storage
    staleTime: 1000 * 10, // 10 seconds data freshness

    // ✅ Refetch behavior
    refetchOnWindowFocus: false,

    // ✅ Keep previous data when refetching
    keepPreviousData: true,
  });

  if (isLoading) return <h3>Loading posts...</h3>;

  if (isError) return <h3>Error: {error.message}</h3>;

  return (
    <div>
      <h2>Posts List</h2>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;