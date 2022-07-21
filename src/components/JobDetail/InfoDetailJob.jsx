import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/infoDetailJob.css"


function InfoDetailJob({ id, jobName, companyName, hsPublished, jobLocation, onSiteOrRemote, description, datePublished, jobTitle, companyLink, companyLogo }) {
    return (
        <>
            <div className="cardDetail">
                <div className="col-md-4 d-flex">
                    <img src={companyLogo} className="img-fluid rounded-start rounded pl" alt="Logo Empresa"></img>
                    <div className="col-md-8">
                        <div className="card-body">
                            <ul className="iconsList1">
                                <li><h5 className="card-title">{jobName}</h5></li>
                                <a href={companyLink}>
                                    <li className="card-text">{companyName}</li></a>
                                <li className="card-publish">"Publicado" {hsPublished}</li>
                                <li>{description}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="iconsList">
                        <li className="card-rightText"><i id="iconsCards" class="bi bi-plus-square-fill"></i>{jobTitle}</li>
                        <li className="card-rightText"><i id="iconsCards" className="bi bi-house-fill"></i>{onSiteOrRemote}</li>
                        <li className="card-rightText"><i id="iconsCards" className="bi bi-geo-alt-fill"></i>{jobLocation}</li>
                        <li className="card-rightText"><i id="iconsCards" className="bi bi-megaphone-fill"></i>{datePublished}</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default InfoDetailJob