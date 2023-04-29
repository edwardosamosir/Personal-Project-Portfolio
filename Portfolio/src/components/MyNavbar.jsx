import myPic from '../assets/png/Edwardo-Samosir-removed-bg.png'
import hamMenu from '../assets/svg/ham-menu.svg'
import hamMenuClose from '../assets/svg/ham-menu-close.svg'

export default function MyNavbar (){
    return (
        <header className="header">
        <div className="header__content">
          <div className="header__logo-container">
            <div className="header__logo-img-cont">
              <img
                src={myPic}
                alt="Edwardo Samosir Logo Image"
                className="header__logo-img"
              />
            </div>
            <span className="header__logo-sub">Edwardo Samosir</span>
          </div>
          <div className="header__main">
            <ul className="header__links">
              <li className="header__link-wrapper">
                <a href="" className="header__link"> Home </a>
              </li> 
              <li className="header__link-wrapper">
                <a href="" className="header__link">About </a>
              </li>
              <li className="header__link-wrapper">
                <a href="" className="header__link">
                  Projects
                </a>
              </li>
              <li className="header__link-wrapper">
                <a href="" className="header__link"> Resume </a>
              </li>
            </ul>
            <div className="header__main-ham-menu-cont">
              <img
                src={hamMenu}
                alt="hamburger menu"
                className="header__main-ham-menu"
              />
              <img
                src={hamMenuClose}
                alt="hamburger menu close"
                className="header__main-ham-menu-close d-none"
              />
            </div>
          </div>
        </div>
        <div className="header__sm-menu">
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <a href="./index.html"> Home </a>
              </li>
  
              <li className="header__sm-menu-link">
                <a href="./index.html#about"> About </a>
              </li>
  
              <li className="header__sm-menu-link">
                <a href="./index.html#projects"> Projects </a>
              </li>
  
              <li className="header__sm-menu-link">
                <a href="./index.html#resume"> Resume </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
}