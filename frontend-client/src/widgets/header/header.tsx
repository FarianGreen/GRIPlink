import { Path } from '../../app/config/path';
import { Link } from 'react-router-dom';
import './header.scss';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks';
import { toggle } from './reducer/headerSlice';
import { logOut } from '../../features/loginForm/reducer/loginSlice';
import { ReactComponent as Logo } from '@icons/header-icons/linkedin-outlined.svg';

export const Header = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.header.toggleHeaderMenu);
  return (
    <section className="header">
      <nav className="header__nav">
        <div
          className={
            active ? 'header__nav-burger--active' : 'header__nav-burger'
          }
          onClick={() => dispatch(toggle())}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={active ? 'header__nav-menu--active' : 'header__nav-menu'}
          onClick={() => dispatch(toggle())}
        >
          <Link className="header__nav-menu-item" to={Path.home}>
            <Logo className="header__nav-menu-item-icon" />

            <span>Профиль</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.messages}>
            <span>Мессенджер</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.friends}>
            <span>Друзья</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.clubs}>
            <span>Сообщество</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.schedule}>
            <span>Расписание</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.events}>
            <span>События</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.photo}>
            <span>Фото</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.video}>
            <span>Видео</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.music}>
            <span>Музыка</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.files}>
            <span>Файлы</span>
          </Link>
          <Link className="header__nav-menu-item" to={Path.settings}>
            <span>Общие настройки</span>
          </Link>
          <div
            className="header__nav-menu-item"
            onClick={() => dispatch(logOut())}
          >
            <span>Выйти из профиля</span>
          </div>
        </ul>
      </nav>
    </section>
  );
};
