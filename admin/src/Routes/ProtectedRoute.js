import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Layouts/Loader';

const ProtectedRoute = ({ children }) => {

    const { loading, isAuthenticated } = useSelector(state => state.user);
    const location = useLocation();

    if (loading) {
        return <Loader/>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};

export default ProtectedRoute;