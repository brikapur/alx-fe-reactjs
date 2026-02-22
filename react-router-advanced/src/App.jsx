import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/profile">Profile</Link> |
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;