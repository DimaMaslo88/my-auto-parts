import React from 'react';
import {AvatarIcon} from "ui/assets/icons/Avatar-icon";
import style from 'styles/header/header.module.scss'

 export const Header = () => {
    return (
        <div className={style.headerContainer}>
            <nav className={style.navContainer}>
            <h3 className={style.h3}>Главная</h3>
            <h3  className={style.h3}>Список Запчастей</h3>
            <h3  className={style.h3}>Фото и видео отчет</h3>
            </nav>
            <AvatarIcon   width={100}
                          height={100}
            />
        </div>
    );
};

