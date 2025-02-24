import React from 'react';
import {AvatarIcon} from "ui/assets/icons/Avatar-icon";
import style from 'styles/header/header.module.scss'
import {Link} from "react-router-dom";

export const Header = () => {


    return (
        <div className={style.headerContainer}>
            <nav className={style.navContainer}>
                <Link className={style.link} to='mainPage'>Главная</Link>
                <Link className={style.link} to='parts'>Список Запчастей</Link>
                <Link className={style.link} to='photoPage'>Фото и видео отчет</Link>
            </nav>
            <AvatarIcon width={100}
                        height={100}
            />
        </div>
    );
};

