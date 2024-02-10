import { Path } from '../../app/config/path';
import { Link } from 'react-router-dom';
import './header.scss';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks';
import { toggle } from './reducer/headerSlice';
import { logOut } from '../../features/loginForm/reducer/loginSlice';
import { ReactComponent as Profile } from '@icons/header-icons/profile-icon.svg';
import { ReactComponent as Message } from '@icons/header-icons/message-icon.svg';
import { ReactComponent as Friends } from '@icons/header-icons/friends-icon.svg';
import { ReactComponent as Community } from '@icons/header-icons/community-icon.svg';
import { ReactComponent as Calendar } from '@icons/header-icons/calendar-icon.svg';
import { ReactComponent as Event } from '@icons/header-icons/event-icon.svg';
import { ReactComponent as Photo } from '@icons/header-icons/photo-icon.svg';
import { ReactComponent as Video } from '@icons/header-icons/video-icon.svg';
import { ReactComponent as Music } from '@icons/header-icons/music-icon.svg';
import { ReactComponent as Files } from '@icons/header-icons/files-icon.svg';
import { ReactComponent as Settings } from '@icons/header-icons/settings-icon.svg';
import { ReactComponent as Exit } from '@icons/header-icons/exit-icon.svg';

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
            <Profile className="header__nav-menu-item-icon" />
            <span>Профиль</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.messages}>
            <Message className="header__nav-menu-item-icon" />
            <span>Мессенджер</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.friends}>
            <Friends className="header__nav-menu-item-icon" />
            <span>Друзья</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.clubs}>
            <Community className="header__nav-menu-item-icon" />
            <span>Сообщество</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.schedule}>
            <Calendar className="header__nav-menu-item-icon" />
            <span>Расписание</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.events}>
            <Event className="header__nav-menu-item-icon" />
            <span>События</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.photo}>
            <Photo className="header__nav-menu-item-icon" />
            <span>Фото</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.video}>
            <Video className="header__nav-menu-item-icon" />
            <span>Видео</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.music}>
            <Music className="header__nav-menu-item-icon" />
            <span>Музыка</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.files}>
            <Files className="header__nav-menu-item-icon" />
            <span>Файлы</span>
          </Link>

          <Link className="header__nav-menu-item" to={Path.settings}>
            <Settings className="header__nav-menu-item-icon" />
            <span>Общие настройки</span>
          </Link>

          <div
            className="header__nav-menu-item"
            onClick={() => dispatch(logOut())}
          >
            <Exit className="header__nav-menu-item-icon" />
            <span>Выйти из профиля</span>
          </div>
        </ul>
      </nav>
    </section>
  );
};
