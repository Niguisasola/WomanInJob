
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from "../components/EstaticComponents/NavBar";
import InfoDetailJob from "../components/JobDetail/InfoDetailJob";
import { useParams } from 'react-router-dom';

function JobDetailPage() {
  const {id} = useParams();
  const [wjob, setwJob] = useState([]);

  useEffect (()=>{
      axios.get(`http://localhost:5000/joblist/${id}`)
      .then ((res)=> {
          setwJob(res.data)
      })
  },[])

  return (
    <> 
        <NavBar/>     
        <InfoDetailJob   id={wjob.id} 
                          companyName={wjob.companyName} 
                          hsPublished={wjob.hsPublished} 
                          jobLocation={wjob.jobLocation} 
                          onSiteOrRemote={wjob.onSiteOrRemote} 
                          description={wjob.description} 
                          datePublished={wjob.datePublished} 
                          jobTitle={wjob.jobTitle} 
                          companyLink={wjob.companyLink} 
                          companyLogo={wjob.companyLogo}/>
        {console.log(wjob)}
    </>
  );
}

export default JobDetailPage;
