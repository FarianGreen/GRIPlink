import { Path } from '../../app/config/path';
import { Link } from 'react-router-dom';

import './header.scss';
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
            Профиль
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            Мессенджер
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            Друзья
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            Сообщество
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            Расписание
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            События
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            Фото
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            Видео
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            Музыка
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            Файлы
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}>
            Общие настройки
          </Link>
          <Link className="header__nav-menu-item" to={Path.home}></Link>
        </ul>
      </nav>
    </section>
  );
};
