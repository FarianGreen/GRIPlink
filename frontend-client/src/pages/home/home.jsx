import { Navigate } from "react-router-dom";
import { Path } from "../../app/config/path";
import { useAppSelector } from "../../shared/hooks/hooks";

export const Home = () => {
  const isLogined = useAppSelector((state) => state.login.isLogined);
  if (!isLogined) {
    return <Navigate to={Path.login} />;
  }
  return <div>I home</div>;
};
