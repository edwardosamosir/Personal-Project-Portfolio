import { Link } from "react-router-dom";
import myPic from '../assets/png/Edwardo-Samosir-removed-bg.png'
import hamMenu from '../assets/svg/ham-menu.svg'
import hamMenuClose from '../assets/svg/ham-menu-close.svg'

export default function MyNavbar (){
    return (
        <header className="header">
        <div className="header__content">
          <div className="header__logo-container">
            <div className="header__logo-img-cont">
              <Link to={"/"}>
                <img
                  src={myPic}
                  alt="Edwardo Samosir Logo Image"
                  className="header__logo-img"
                />
              </Link>
            </div>
            <Link to={"/resume"}>
              <span className="header__logo-sub">Edwardo Samosir</span>
            </Link>
          </div>
          <div className="header__main">
            <ul className="header__links">
              <li className="header__link-wrapper">
                <Link to={"/"} className="header__link"> Home </Link>
              </li> 
              <li className="header__link-wrapper">
                <Link to={"/about"} className="header__link">About </Link>
              </li>
              <li className="header__link-wrapper">
                <Link to={"/projects"} className="header__link">
                  Projects
                </Link>
              </li>
              <li className="header__link-wrapper">
                <Link to={"/resume"} className="header__link"> Resume </Link>
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
                <Link to={"/"}> Home </Link>
              </li>
  
              <li className="header__sm-menu-link">
                <Link to={"/about"}> About </Link>
              </li>
  
              <li className="header__sm-menu-link">
                <Link to={"/projects"}> Projects </Link>
              </li>
  
              <li className="header__sm-menu-link">
                <Link to={"/resume"}> Resume </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
}