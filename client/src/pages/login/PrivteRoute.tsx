import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';


const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuth();

	let location = useLocation();

	if (loading) {
		return <h2>Page is loading...</h2>;
	}

	if (user?.email || user.displayName) {
		return children;
	}
	return <Navigate to='/login' state={{ from: location }} />;
};

export default PrivateRoute;