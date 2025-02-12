import React, { useEffect } from 'react';
import Header from '../components/Header';

import './userpage.css';

const UserPage = () => {

    useEffect(() => {
        const handleScreenSizeChangeAdaptive = () => {
        const header = document.querySelector(".header");
        if (header) {
            const headerHeight = header.offsetHeight;
            const explore = document.querySelector(".user__page");
            if (explore) {
            explore.style.paddingTop = `${headerHeight}px`;
            }
        }
        };
    
        // Вызываем при монтировании
        handleScreenSizeChangeAdaptive();
    
        // Подписываемся на изменение размера окна
        window.addEventListener("resize", handleScreenSizeChangeAdaptive);
    
        return () => {
        // Отписываемся при размонтировании
        window.removeEventListener("resize", handleScreenSizeChangeAdaptive);
        };
    }, []);

    return (
        <>
            <Header />
            <div className='user__page'>
                <div className="user__page-wrapp">
                    <h1>страница пользователя</h1>
                </div>
            </div>
        </>
    )
}

export default UserPage;
