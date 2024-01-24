import { Path } from "../../app/config/path";
import { Link } from "react-router-dom";

import "./header.scss";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import { toggle } from "./reducer/headerSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.header.toggleHeaderMenu);
  return (
    <section className="header">
      <nav className="header__nav">
        <div
          className={
            active ? "header__nav-burger--active" : "header__nav-burger"
          }
          onClick={() => dispatch(toggle())}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={active ? "header__nav-menu--active" : "header__nav-menu"}
          onClick={() => dispatch(toggle())}
        >
          <Link className="header__nav-menu-item" to={Path.home}>
            <span></span>
            Профиль
          </Link>
          <Link className="header__nav-menu-item" to={Path.messages}>
            <span></span>
            Мессенджер
          </Link>
          <Link className="header__nav-menu-item" to={Path.friends}>
            <span></span>
            Друзья
          </Link>
          <Link className="header__nav-menu-item" to={Path.clubs}>
            <span></span>
            Сообщество
          </Link>
          <Link className="header__nav-menu-item" to={Path.schedule}>
            <span></span>
            Расписание
          </Link>
          <Link className="header__nav-menu-item" to={Path.events}>
            <span></span>
            События
          </Link>
          <Link className="header__nav-menu-item" to={Path.photo}>
            <span></span>
            Фото
          </Link>
          <Link className="header__nav-menu-item" to={Path.video}>
            <span></span>
            Видео
          </Link>
          <Link className="header__nav-menu-item" to={Path.music}>
            <span></span>
            Музыка
          </Link>
          <Link className="header__nav-menu-item" to={Path.files}>
            <span></span>
            Файлы
          </Link>
          <Link className="header__nav-menu-item" to={Path.settings}>
            <span></span>
            Общие настройки
          </Link>
          <div className="header__nav-menu-item">
            <span></span> Выйти из профиля
          </div>
        </ul>
      </nav>
    </section>
  );
};
