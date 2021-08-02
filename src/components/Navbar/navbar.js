import React, {useState} from 'react'
import './Navbar.css'
import { Button, ButtonLogin } from '../Buttons/priamry-btn'
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false); 
    const [dropdow, setDropdown] = useState(false);
    return (
        <div>
            <nav className={toggleMenu ? 'nav-active' : ''}>
                <div className="nb-title-left">
                    <a href="#home"><h1>DEVBLOG</h1></a>
                </div>
                <div className="nav-menu-center">
                    <ul className="navlinks-wrapper">
                        <li className="navlink"> <a href="#blog" className="link active">Блог</a></li>
                        <li className="navlink hasDropdown-1" onClick={() => setDropdown(!dropdow)}><a href="#groups" className="link">Групи</a>
                            <div className={dropdow ? "dropdown-gr " : "dropdown-gr set-d-n"}>
                                <ul className="dropdown-links">
                                    <li><a href="#forus">Намиране на група</a></li>
                                    <li><a href="#projects">Създаване на група</a></li>  
                                </ul>
                            </div>
                        </li>
                        <li className={dropdow ? "navlink set-mt" : "navlink"}><a href="#popular" className="link">Популярно</a></li>
                        <li className={dropdow ? "navlink set-mt2" : "navlink"} onClick={() => setDropdown(!dropdow)} ><a href="#abour" className="link">За DEVBLOG</a>
                            <div className="dropdown">
                                <ul className="dropdown-links">
                                    <li><a href="#forus">Eкип</a></li>
                                    <li><a href="#projects">Проекти</a></li>
                                    <li><a href="#partners">Партьори</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nb-btn-group-right">
                    <ButtonLogin>Вход</ButtonLogin>
                    <Button>Регистрация</Button>
                </div>
            </nav>
            <div className={toggleMenu ? "nb-menu-burger-menu toggle" : "nb-menu-burger-menu"} onClick={() => setToggleMenu(!toggleMenu)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>

    )
}

export default Navbar
