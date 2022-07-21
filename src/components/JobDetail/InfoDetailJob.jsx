/*import React, {useState, useEffect} from "react";
import axios from "axios";

function InfoDetailJob (){
    const [wjob, setwJob] = useState([]);
    useEffect (()=>{
        axios.get("http://localhost:5000/joblist/", {id})
        .then ((res)=> {
            setwJob(res.data)
        })
    },[])

    return(
        <>
        <div className="infoDetail d-flex justify-content-center card mb-3 w-50 h-auto mt-5 ">
        
        <div className="contentJobs ">
                {
                    wjob.map((item, index)=>(
                        <JobCardItem
                            key={index} 
                            jobName={item.jobName} 
                            companyName={item.companyName} 
                            companyLink={item.companyLink}
                            hsPublished={item.hsPublished} 
                            JobSalaryRange={item.JobSalaryRange} 
                            jobTitle={item.jobTitle} 
                            jobLocation={item.jobLocation} 
                            datePublished={item.datePublished} 
                            description={item.description} 
                            onSiteOrRemote={item.onSiteOrRemote} 
                        />
                    ))
                }
            </div>

                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center">
                        <img src={companyLogo} className="img-fluid rounded-start" alt="Logo Empresa"></img>
                        <ul>
                        <li className="card-rightText">{jobType}</li>
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
                                <li>{description}</li>
                            </ul>
                        </div>
                    </div>
                </div>  
        </div>
    </>
    )
}

export default InfoDetailJob;*/