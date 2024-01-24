import "./home.scss";

export const Home = () => {
  return (
    <section className="home">
      <div className="home__photo"></div>
      <div className="home__content">
        <div className="home__content-nav"></div>
        <div className="home__content-user"></div>
        <div className="home__content-info"></div>
        <div className="home__content-publication"></div>
      </div>
    </section>
  );
};
