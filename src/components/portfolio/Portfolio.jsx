import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import TextUtils from "../../assets/TextUtils_Screenshot.png";
import StayWoke from "../../assets/StayWoke_Screenshot.png";
import IMG2 from "../../assets/coming_soon.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=" " />
          </div>
          <h3>Personal Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/wildgrin/Portfolio-Website.git"
              className="btn"
            >
              Github
            </a>
            <a href="/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="textUtils__item-image">
            <img src={TextUtils} alt=" " />
          </div>
          <h3>TextUtils - Text Analyzer</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/wildgrin/Portfolio-Website.git"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://anshultextutil.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={StayWoke} alt=" " />
          </div>
          <h3>Stay Woke - News Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/wildgrin/Portfolio-Website.git"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://img.freepik.com/free-vector/coming-soon-construction-illustration-design_1017-31446.jpg?w=900&t=st=1668850080~exp=1668850680~hmac=325083c752c0f5fa8773b7923a59060f1852db8a79dff17307974a6f3b19734e"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
