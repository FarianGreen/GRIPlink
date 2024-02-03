import './home.scss';

export const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <article className="home__content-card">
          <div className="home__content-card-front">
            <span className="home__content-card-front-name"></span>
            <span className="home__content-card-front-info"></span>
          </div>
          <div className="home__content-card-back"></div>
        </article>
        <button className="home__content-button"></button>
      </div>
    </section>
  );
};
