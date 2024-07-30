import React from 'react';
import {Routes, Route,Navigate} from "react-router-dom";
import {MainPage} from "ui/pages/mainPage/MainPage";


export const Pages = () => {
    return (
        <div>
           <Routes>
               <Route path='/' element={<Navigate to='/mainPage'/>}/>
               <Route path='/mainPage' element={<MainPage/>}/>
           </Routes>
        </div>
    );
};

