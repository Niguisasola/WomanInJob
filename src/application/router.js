import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import AddNewOfferPage from '../pages/AddNewOfferPage';
import ContactUs from '../pages/ContactPage';
// import JobDetailPage from '../pages/JobDetailPage';
import JobFavorites from '../pages/FavoritePage';


function Router (){
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<WelcomePage/>} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/addnewofferpage' element={<AddNewOfferPage/>} />
            <Route path='/contactus' element={<ContactUs/>} />
            {/* <Route path='/jobdetailpage/:id' element={<JobDetailPage/>} /> */}
            <Route path='/jobfavorites' element={<JobFavorites/>} />
        </Routes>
    </BrowserRouter>
    )
}
export default Router;