import { Link } from "react-router-dom";
import React, { Component } from 'react';
import "../../styles/advCarrousell.css";
 
 
function AdvCarrousell() {
 return (
   <>
     <section>
       <div id="carouselExampleCaptions" className="carousel slide mx-auto w-50" data-bs-ride="false">
         <div className="carousel-indicators">
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
         <div className="carousel-inner">
           <div className="carousel-item active">
             <img src="https://images.unsplash.com/photo-1573495611823-5397efa4fac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjB0ZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block" alt="..."></img>
             <div className="carousel-caption d-none d-md-block">
             </div>
           </div>
           <div className="carousel-item active">
             <img src="https://images.unsplash.com/photo-1573167130797-8453176c73d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjB0ZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block" alt="..."></img>
             <div className="carousel-caption d-none d-md-block">
             </div>
           </div>
           <div className="carousel-item active">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjB0ZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block" alt="..."></img>
             <div className="carousel-caption d-none d-md-block">
             </div>
           </div>
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
           <span className="carousel-control-next-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Next</span>
         </button>
       </div>
     </section>
     <div className="navOffers">
       <div className="titlesHome">
         <h2 className="offer">ofertas</h2>
       </div>
       <div className="companyOffer"></div>
       <p className="imCompany">soy empresa</p>
       < Link to="/AddNewOfferPage" className="offerJobs">OFERTAR EMPLEOS</Link>
     </div>
   </>
 )
}
export default AdvCarrousell;
