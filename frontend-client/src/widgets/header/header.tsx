import { Path } from '../../app/config/path';
import { Link } from 'react-router-dom';

import './header.scss';
import './header.jsx';

export const Header = () => {
  return (
    <section className="header">
      <nav className="header__nav">
        <div className="header__nav-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="header__nav-menu">
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Профиль
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Мессенджер
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Друзья
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Сообщество
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Расписание
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            События
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Фото
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Видео
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Музыка
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Файлы
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Общие настройки
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Выйти из профиля
          </Link>
        </ul>
      </nav>
    </section>
  );
};
