import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import burger from '../assets/burger.svg';
import logo from '../assets/logo.png';
import close from '../assets/close.svg';
import Navbar from './Navbar';

const Header = () => {

    const [burgerOpened, setBurgerOpened] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 992);
        if (window.innerWidth > 992) {
          setBurgerOpened(false); // Закрываем бургер при увеличении экрана
        }
      };
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    
    const navigate = useNavigate();

    const goToHome = () => {
      navigate("/", { replace: true }); // Переход без возможности вернуться назад
      window.location.reload(); // Принудительная перезагрузка страницы
    };

  return (
    <header className="header">
        <div className="burger" onClick={() => setBurgerOpened(true)}>
            <img src={burger} alt="" />
        </div>
        <div className="header__main-wrapp">
        <div className="logo">
                <img src={logo} onClick={goToHome} alt="" />
            </div>
            <div className="header__wrapp">
                    <nav className={`main__menu ${burgerOpened ? "opened__main-menu" : ""}`}>
                    {isMobile && (
                    <div className="close" onClick={() => setBurgerOpened(false)}>
                        <img src={close} alt="" />
                    </div>
                    )}
                    <ul>
                    <li><Link onClick={goToHome}>Home</Link></li>
                    <li><Link to="/destinations" onClick={() => setBurgerOpened(false)}>Destinations</Link></li>
                    <li><Link to="/about" onClick={() => setBurgerOpened(false)}>About</Link></li>
                    <li><Link to="/partners" onClick={() => setBurgerOpened(false)}>Partner</Link></li>
                    </ul>
                </nav>
                <Navbar />
            </div> 
        </div>
    </header>
  )
}

export default Header
