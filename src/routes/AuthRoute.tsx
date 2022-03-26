import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth: React.FC<{ children: JSX.Element; auth: any }> = ({
  children,
  auth,
}) => {
  let location = useLocation();

  if (!auth || (auth && Object.keys(auth).length === 0)) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

export const OnlineRoute: React.FC<{ children: JSX.Element; auth: any }> = ({
  children,
  auth,
}) => {
  let location = useLocation();

  if (auth && Object.keys(auth).length > 0) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
