import React, { useState } from "react";
import "./Navbar.css";
import { Button, ButtonLogin } from "../Buttons/priamry-btn";
import { openLogin,closeLogin, openRegister } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import UserMenu from "../User/user-menu";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdow, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const modalReducer = useSelector((state) => state.modalReducer);  
  const modalRegiser = useSelector((regState) => regState.modalRegiser);
  const dispatch = useDispatch();

  const user = false;
  const btnGroup = (
    <div
    className={
      dropdow ? "nb-btn-group-right set-mt2" : "nb-btn-group-right"
    }
  >
 
    <ButtonLogin onClick={() => {dispatch(openLogin());}}>Вход</ButtonLogin>
    <Button onClick={() => {dispatch(openRegister()); dispatch(closeLogin())}}>Регистрация</Button>
  </div>
  );
  return (
    <div>
      <nav className={toggleMenu && !modalReducer && !modalRegiser ? "nav-active fixed-top" : "fixed-top"}>
        <div className="nb-title-left">
          <a href="#home">
            <h1 className="header-txt">DEVBLOG</h1>
          </a>
        </div>
        <div className="nav-menu-center">
          <ul className="navlinks-wrapper">
            <li className="navlink">
              {" "}
              <a href="#blog" className="link active">
                Блог
              </a>
            </li>
            <li
              className="navlink hasDropdown-1"
              onClick={() => setDropdown(!dropdow)}
            >
              <a href="#groups" className="link">
                Групи
              </a>
              <div className={dropdow ? "dropdown-gr " : "dropdown-gr set-d-n"}>
                <ul className="dropdown-links">
                  <li>
                    <a href="#forus">Намиране на група</a>
                  </li>
                  <li>
                    <a href="#projects">Създаване на група</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={dropdow ? "navlink set-mt" : "navlink"}>
              <a href="#popular" className="link">
                Популярно 
              </a>
            </li>
            <li
              className={
                dropdow
                  ? "navlink set-mt2 hasDropdown-2"
                  : "navlink hasDropdown-2"
              }
              onClick={() => setDropdown2(!dropdown2)}
            >
              <a href="#abour" className="link">
                За DEVBLOG
              </a>
              <div className={dropdown2 ? "dropdown " : "dropdown set-d-n"}>
                <ul className="dropdown-links">
                  <li>
                    <a href="#forus">Eкипът на DEVBLOG</a>
                  </li>
                  <li>
                    <a href="#projects">Проекти на DEVBLOG</a>
                  </li>
                  <li>
                    <a href="#partners">Партьори</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        { user ? <UserMenu /> : btnGroup}
      </nav>
      <div
        className={
          toggleMenu ? "nb-menu-burger-menu toggle" : "nb-menu-burger-menu"
        }
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Navbar;
