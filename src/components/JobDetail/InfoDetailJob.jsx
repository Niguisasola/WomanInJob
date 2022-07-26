import React, {useState, useEffect} from "react";
import axios from "axios"; 
import "../../styles/infodetailjob.css"


function InfoDetailJob ({ id, jobName, companyName, hsPublished, jobLocation, onSiteOrRemote, detail, datePublished, jobTitle, companyLink, companyLogo}) 
{
    return(
        <>
         <div className="row g-0">
             <div className="col-md-4 d-flex align-items-center">  
                 <img src={companyLogo} className="img-fluid rounded-start" alt="Logo Empresa"></img>
                 <ul>
                     <li className="card-rightText">{jobTitle}</li>
                     <li className="card-rightText">{onSiteOrRemote}</li>
                     <li className="card-rightText">{jobLocation}</li>
                     <li className="card-rightText">{datePublished}</li>
                     </ul>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <ul>
                        <li><h5 className="card-title">{jobName}</h5></li>
                        <a href= {companyLink}>
                        <li className="card-text">{companyName}</li>
                        </a>
                        <li>"Publicado "{hsPublished}</li>
                    </ul>
               </div>
               <div className="{detail}">
               </div>
            </div>
        </div>
        </>
     ) 
 }

 export default InfoDetailJob