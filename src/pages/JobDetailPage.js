import NavBar from "../components/EstaticComponents/NavBar";
import InfoDetailJob from "../components/JobDetail/InfoDetailJob";
import { useParams } from 'react-router-dom';

function JobDetailPage() {
  const {id} = useParams();
  
  return (
    <> 
        <NavBar/>     
        <InfoDetailJob/>
    </>
  );
}

export default JobDetailPage;
