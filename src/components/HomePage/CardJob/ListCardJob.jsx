import React, {useState, useEffect} from "react";
import JobCardItem from "./JobCardItem";
//import "../styles/liststyles.css";
import axios from "axios";

function ListCardJob (){
    const [jobList, setJobsApi] = useState([]);
    useEffect (()=>{
        axios.get("http://localhost:5000/joblist")
        .then ((res)=> {
            setJobsApi(res.data)
        })

    },[])

    return(
        <div className="d-flex justify-content-center">
            
            <div className="contentJobs ">
                {
                    jobList.map((item, index)=>(
                        <JobCardItem
                            key={index} 
                            id={item.id}
                            jobName={item.jobName} 
                            companyName={item.companyName} 
                            companyLink={item.companyLink}
                            companyLogo={item.companyLogo}
                            hsPublished={item.hsPublished} 
                            JobSalaryRange={item.JobSalaryRange} 
                            jobTitle={item.jobTitle} 
                            jobLocation={item.jobLocation} 
                            datePublished={item.datePublished} 
                            description={item.description} 
                            details={item.details}
                            onSiteOrRemote={item.onSiteOrRemote} 
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default ListCardJob