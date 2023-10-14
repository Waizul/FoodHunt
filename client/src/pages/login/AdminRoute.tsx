import { Navigate, useLocation } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const AdminRoute = ({ children }) => {
  // const { user, loading } = useAuth();
  const user = {
    isAdmin: true
  }

  let location = useLocation();

  // if (loading) {
  //   return <h2>Page is loading...</h2>;
  // }

  if (user.isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
