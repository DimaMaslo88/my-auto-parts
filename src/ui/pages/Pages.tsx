import React from 'react';
import {Routes, Route,Navigate} from "react-router-dom";
import {MainPage} from "ui/pages/mainPage/MainPage";
import {Parts} from "ui/pages/parts/Parts";


export const Pages = () => {
    return (
        <div>
           <Routes>
               <Route path='/' element={<Navigate to='/mainPage'/>}/>
               <Route path='/mainPage' element={<MainPage/>}/>
               <Route path='/parts' element={<Parts/>}/>
           </Routes>
        </div>
    );
};

