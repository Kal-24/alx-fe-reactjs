import { Navigate } from "react-router-dom";
import { useAuth } from "../auth"; // ✅ This import is required

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ Required usage

  return isAuthenticated ? children : <Navigate to="/" replace />;
}
