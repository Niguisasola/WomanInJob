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
        {/* <InfoDetailJob send job props /> */}
        {console.log(wjob)}
    </>
  );
}

export default JobDetailPage;
