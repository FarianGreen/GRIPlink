import { Navigate } from 'react-router-dom';
import { Path } from '../../app/config/path';
import { useAppSelector } from '../../shared/hooks/hooks';

import './home.scss';

export const Home = () => {
  const isLogined = useAppSelector((state) => state.login.isLogined);
  if (!isLogined) {
    return <Navigate to={Path.login} />;
  }
  return (
    <section className="home">
      <div className="home__photo"></div>
      <div className="home__content">
        <div className="home__content-nav"></div>
        <div className="home__content-user"></div>
        <div className="home__content-info"></div>
        <div className="home__content-publication"></div>
      </div>
    </section>
  );
};
