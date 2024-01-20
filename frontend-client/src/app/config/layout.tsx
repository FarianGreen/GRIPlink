import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/header/header';
import { Sidebar } from '../../widgets/sidebar/sidebar';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
    </>
  );
};
