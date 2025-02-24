import React from 'react';
import defaultUser from 'ui/assets/images/defautUser.png'
import style from 'styles/mainPage/profilePage/profilePage.module.scss'

export const UserPage = () => {
    return (
        <form className={style.profileContainer}>
            <img src={defaultUser} alt='photoUser' />
            <input/>
        </form>
    );
};

