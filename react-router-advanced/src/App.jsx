import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Post from "./pages/Post";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter> {/* ✅ Now inside App.jsx */}
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/profile">Profile</Link> |
        <Link to="/post/123">Post 123</Link> |
        <Link to="/blog/abc">Blog abc</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        <Route path="/post/:postId" element={<Post />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
