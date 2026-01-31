import { useEffect, useState } from "react";
import { fetchUserDetails } from "../services/githubService.js";

function UserCard({ user }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchUserDetails(user.login)
      .then(setDetails)
      .catch(() => {});
  }, [user.login]);

  return (
    <div className="flex gap-4 p-4 border rounded shadow-sm bg-white">
      {/* Avatar */}
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />

      {/* User info */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{user.login}</h3>

        {details ? (
          <>
            <p className="text-sm text-gray-600">
              📍 {details.location || "Not specified"}
            </p>
            <p className="text-sm text-gray-600">
              📦 Repos: {details.public_repos}
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-400">Loading details…</p>
        )}

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-sm hover:underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default UserCard;
