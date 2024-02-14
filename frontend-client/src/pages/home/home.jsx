import './home.scss';

import homeImg from '../../assets/img/home-img/home-img.jpg';
import mainBackground from '../../assets/img/main-background/background.jpg';

import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks';
import { toggleCard } from './reducer/cardSlice';

export const Home = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.card.toggleCard);
  const data = JSON.parse(localStorage.getItem('userToken'));

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
                {`${data.userName} ${data.userSurname}`}
              </span>
              <span className="home__content-card-front-about">
                {`${data.age}г / ${data.weight}`}
              </span>
            </div>
          </div>

          <div className="home__content-card-back">
            <button className="home__content-card-back-exit"></button>
            <div className="home__content-card-back-about">
              <h2 className="home__content-card-back-about-title">Подробнее</h2>

              <ul className="home__content-card-back-about-info">
                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Имя Фамилия:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Дата рождения:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Категория:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Вес:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Пояс:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Кем выдан:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Статус:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Регион/Город:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Академия/Клуб/Команда:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Тренер:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>

                <li className="home__content-card-back-about-info-item">
                  <h6 className="home__content-card-back-about-info-item-title">
                    Участие в соревнованиях:
                  </h6>
                  <span>Bla Bla Bla</span>
                </li>
              </ul>
            </div>
            <img
              src={mainBackground}
              alt=""
              className="home__content-card-back-picture"
            />
          </div>
        </article>
      </div>
    </section>
  );
};
