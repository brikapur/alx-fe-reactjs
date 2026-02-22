import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
import ProtectedRoute from "../routes/ProtectedRoute";

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