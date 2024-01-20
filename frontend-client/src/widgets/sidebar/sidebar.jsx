import { Path } from '../../app/config/path';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import iconHouse from '../../assets/icons/sidebar-icons/house-icon.svg';
import iconCalendar from '../../assets/icons/sidebar-icons/calendar-icon.svg';
import iconMessage from '../../assets/icons/sidebar-icons/message-icon.svg';
import iconJoystick from '../../assets/icons/sidebar-icons/joystick-icon.svg';
import iconSearch from '../../assets/icons/sidebar-icons/search-icon.svg';

export const Sidebar = () => {
  return (
    <ul className="navbar">
      <Link className="navbar__item" to={Path.home}>
        <img src={iconHouse} alt="" />
      </Link>
      <Link className="navbar__item" to={Path.friends}>
        <img src={iconCalendar} alt="" />
      </Link>
      <Link className="navbar__item" to={Path.messages}>
        <img src={iconMessage} alt="" />
      </Link>
      <Link className="navbar__item" to={Path.clubs}>
        <img src={iconJoystick} alt="" />
      </Link>
      <Link className="navbar__item" to={Path.search}>
        <img src={iconSearch} alt="" />
      </Link>
    </ul>
  );
};
