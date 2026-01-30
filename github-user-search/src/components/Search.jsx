import { useState } from "react";
import { fetchUserData } from "../service/githubService";
import UserCard from "./UserCard";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) return;

    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: 1,
      });
      setUsers(data.items);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Load more results
  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: nextPage,
      });
      setUsers((prev) => [...prev, ...data.items]);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 md:grid-cols-3 bg-white p-6 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Min repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search Users
        </button>
      </form>

      {/* States */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">No users found.</p>}

      {/* Results */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Pagination */}
      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="block mx-auto mt-6 bg-gray-800 text-white px-6 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
