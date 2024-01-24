import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../../widgets/header/header";
import { Sidebar } from "../../widgets/sidebar/sidebar";
import { useAppSelector } from "../../shared/hooks/hooks";
import { useEffect } from "react";
import { Path } from "./path";

export const Layout = () => {
  const isLogined = useAppSelector((state) => state.login.isLogined);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogined) {
      return navigate(Path.login);
    }
  });
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
    </>
  );
};
