import { Routes, Route, Link, Outlet } from "react-router-dom";

import ProfileDetails from "../pages/ProfileDetails";
import ProfileSettings from "../pages/ProfileSettings";
import ProtectedRoute from "./ProtectedRoute";

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>

      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />

      <Routes>
        <Route
          path="details"
          element={
            <ProtectedRoute>
              <ProfileDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="settings"
          element={<ProfileSettings />}
        />
      </Routes>
    </div>
  );
};

export default Profile;