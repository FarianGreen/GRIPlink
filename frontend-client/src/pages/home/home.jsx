import './home.scss';

import homeImg from '../../assets/img/home-img/home-img.jpg';
import mainBackground from '../../assets/img/main-background/background.jpg';

import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks';
import { toggleCard } from './reducer/cardSlice';

export const Home = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.card.toggleCard);
  return (
    <section className="home">
      <div className="home__content">
        <article
          className={
            active ? 'home__content-card--active' : 'home__content-card'
          }
          onClick={() => dispatch(toggleCard())}
        >
          <div className="home__content-card-front">
            <img
              src={homeImg}
              alt=""
              className="home__content-card-front-picture"
            />
            <div className="home__content-card-front-info">
              <span className="home__content-card-front-name">
                Филиппов Филлип
              </span>
              <span className="home__content-card-front-about">
                31г. Masters / 74кг
              </span>
            </div>
          </div>

          <div className="home__content-card-back">
            <button className="home__content-card-back-exit"></button>
            <img
              src={mainBackground}
              alt=""
              className="home__content-card-back-picture"
            />

            <form
              action="#"
              method="get"
              className="home__content-card-back-profile"
            >
              <div className="home__content-card-back-profile-item">
                <h6 className="home__content-card-back-profile-item-title">
                  Имя:
                </h6>
                <input
                  className="home__content-card-back-profile-item-info"
                  name="username"
                  type="text"
                />
              </div>

              <div className="home__content-card-back-profile-item">
                <h6 className="home__content-card-back-profile-item-title">
                  Фамилия:
                </h6>
                <input
                  className="home__content-card-back-profile-item-info"
                  name="surname"
                  type="text"
                />
              </div>

              <div className="home__content-card-back-profile-item">
                <h6 className="home__content-card-back-profile-item-title">
                  Пол:
                </h6>
                <input
                  className="home__content-card-back-profile-item-info"
                  name="gender"
                  type="text"
                />
              </div>

              <div className="home__content-card-back-profile-item">
                <h6 className="home__content-card-back-profile-item-title">
                  Дата рождения:
                </h6>
                <input
                  className="home__content-card-back-profile-item-info"
                  name="date-of-birth"
                  type="text"
                />
              </div>

              <div className="home__content-card-back-profile-item">
                <h6 className="home__content-card-back-profile-item-title">
                  Категория:
                </h6>
                <input
                  className="home__content-card-back-profile-item-info"
                  name="category"
                  type="text"
                />
              </div>

              <div className="home__content-card-back-profile-item">
                <h6 className="home__content-card-back-profile-item-title">
                  Вес:
                </h6>
                <input
                  className="home__content-card-back-profile-item-info"
                  name="weight"
                  type="text"
                />
              </div>

              <div className="home__content-card-back-profile-item">
                <h6 className="home__content-card-back-profile-item-title">
                  Пояс:
                </h6>
                <input
                  className="home__content-card-back-profile-item-info"
                  name="belt"
                  type="text"
                />
              </div>

              <button
                className="home__content-card-back-profile-button"
                type="submit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </article>
        <button className="home__content-button"></button>
      </div>
    </section>
  );
};
