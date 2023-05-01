import linkedinIcon from '../assets/png/linkedin-ico.png'
import githubIcon from '../assets/png/github-ico.png'
import twitterIcon from '../assets/png/twitter-ico.png'
import ytIcon from '../assets/png/yt-ico.png'
import instaIcon from '../assets/png/insta-ico.png'

export default function MyFooter() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/edwardosamosir/">
                <img
                  className="main-footer__icon"
                  src={linkedinIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/edwardosamosir">
                <img
                  className="main-footer__icon"
                  src={githubIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/EdwardoSamosir">
                <img
                  className="main-footer__icon"
                  src={twitterIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCD5asKEeQv8P9Uc53emLv_w">
                <img
                  className="main-footer__icon"
                  src={ytIcon}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/edwardosamosir/">
                <img
                  className="main-footer__icon main-footer__icon--mr-none"
                  src={instaIcon}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Edwardo Samosir</h4>
            <p className="main-footer__short-desc">
              An aspiring full-stack developer who's passionate about using the latest technologies and frameworks to create dynamic and responsive web and mobile applications.
            </p>
          </div>
        </div>


        <div className="main-footer__lower">
          &copy; Copyright 2023. Created by
          <a rel="noreferrer" target="_blank"
          >Edwardo Samosir</a
          >
        </div>
      </div>
    </footer>
  )
}