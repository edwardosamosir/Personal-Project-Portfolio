import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hi, I'm Edwardo Samosir</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            An aspiring full-stack developer who's passionate about using the latest technologies and frameworks to create dynamic and responsive web and mobile applications.
          </p>
        </div>
        <div className="home-hero__cta">
          <Link to={"/projects"} className="btn btn--bg">Projects</Link>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/edwardosamosir/" className="home-hero__social-icon-link">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/edwardosamosir" className="home-hero__social-icon-link">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://twitter.com/EdwardoSamosir" className="home-hero__social-icon-link">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://www.youtube.com/channel/UCD5asKEeQv8P9Uc53emLv_w" className="home-hero__social-icon-link">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/7c95be3350552a5e9f2fc47f1bdbac118ea4dcee/f7a5e/assets/svg/yt-dark.svg"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://www.instagram.com/edwardosamosir/"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="https://icon-library.com/images/instagram-icon-vector-white/instagram-icon-vector-white-6.jpg"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  )
}