import React from 'react';
import {Routes, Route,Navigate} from "react-router-dom";
import {MainPage} from "ui/pages/mainPage/MainPage";
import {Parts} from "ui/pages/parts/Parts";
import {UserPage} from "ui/pages/userPage/UserPage";


export const Pages = () => {
    return (
        <div>
           <Routes>
               <Route path='/' element={<Navigate to='/mainPage'/>}/>
               <Route path='/mainPage' element={<MainPage/>}/>
               <Route path='/parts' element={<Parts/>}/>
               <Route path='/userPage' element={<UserPage/>}/>
           </Routes>
        </div>
    );
};

