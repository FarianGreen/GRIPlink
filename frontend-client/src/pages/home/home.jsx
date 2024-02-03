import './home.scss';

import homeImg from '../../assets/img/home-img/home-img.jpg';

export const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <article className="home__content-card">
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
          <div className="home__content-card-back"></div>
        </article>
        <button className="home__content-button"></button>
      </div>
    </section>
  );
};
