import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const isLogin = user.isLogin;

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export { RequireAuth };
