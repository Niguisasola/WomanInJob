import NavBar from "../components/EstaticComponents/NavBar";
import JobList from "../components/HomePage/CardJob/ListCardJob";
import AdvCarrousell from "../components/HomePage/AdvCarrousell";
import Footer from "../components/EstaticComponents/Footer";

function HomePage() {
  return (
    <>
      <NavBar/>
      <AdvCarrousell/>
      <JobList/> 
      <Footer/>
    </>
  );
}

export default HomePage;

//Añadir 'Footer' & 'AdvCarrousel' cuando esté listo
