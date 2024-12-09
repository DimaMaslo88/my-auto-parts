import React from 'react';
import {AvatarIcon} from "ui/assets/icons/Avatar-icon";
import style from 'styles/header/header.module.scss'
import {useNavigate} from "react-router-dom";

 export const Header = () => {
    const navigate =useNavigate()
     const navigateToPartsHandler =()=>{
        navigate('parts')
     }
    const navigateToMainHandler =()=>{
        navigate('mainPage')
    }
    return (
        <div className={style.headerContainer}>
            <nav className={style.navContainer}>
            <h3 className={style.h3} onClick={navigateToMainHandler}>Главная</h3>
            <h3  className={style.h3} onClick={navigateToPartsHandler}>Список Запчастей</h3>
            <h3  className={style.h3}>Фото и видео отчет</h3>
            </nav>
            <AvatarIcon   width={100}
                          height={100}
            />
        </div>
    );
};

