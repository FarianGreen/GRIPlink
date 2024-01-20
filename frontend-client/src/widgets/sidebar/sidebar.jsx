import { Path } from '../../app/config/path';
import './sidebar.scss';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <ul className="navbar">
      <Link className="navbar__item" to={Path.home}>
        Главная
      </Link>
      <Link className="navbar__item" to={Path.friends}>
        Друзья
      </Link>
      <Link className="navbar__item" to={Path.messages}>
        Сообщения
      </Link>
      <Link className="navbar__item" to={Path.clubs}>
        Клубы
      </Link>
    </ul>
  );
};
