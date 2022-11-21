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
              href="https://github.com/wildgrin/Portfolio-Website"
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
            <a href="https://github.com/wildgrin/Text-Utils" className="btn">
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
            <a href="https://github.com/wildgrin/Stay-Woke" className="btn">
              Github
            </a>
            <a
              href="https://anshulstaywoke.netlify.app"
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
