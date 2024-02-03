import "./home.scss";

import homeImg from "../../assets/img/home-img/home-img.jpg";
import mainBackground from "../../assets/img/main-background/Background.jpg";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import { toggleCard } from "./reducer/cardSlice";

export const Home = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.card.toggleCard);
  return (
    <section className="home">
      <div className="home__content">
        <article
          className={
            active ? "home__content-card" : "home__content-card--active"
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
            <img
              src={mainBackground}
              alt=""
              className="home__content-card-back-bg"
            />
          </div>
        </article>
        <button className="home__content-button"></button>
      </div>
    </section>
  );
};
