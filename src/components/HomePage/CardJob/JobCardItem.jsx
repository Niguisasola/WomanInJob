

import { Link } from "react-router-dom";
import Address from "../../../assets/data/img/Address.png";
import Megaphone from "../../../assets/data/img/Megaphone.png";
import '../../../styles/card.css';

function JobItem({ jobName, companyName, companyLink, hsPublished, jobLocation, onSiteOrRemote, description, datePublished, jobType }) 
{
  return (
      <>
        
        <section id="cards">
          <div className="accordion" id="accordion-card">
            <div className="accordion-item mt-5">
              <h2 className="accordion-header background" id="headingOne">
                <button className="accordion-button background" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  {jobName}
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex border border-1 shadow p-3 mb-5 bg-body rounded">
                  <div id="card-image" className="d-flex">
                  {/* <Link to="/DetailPage">
                  <img src={DetailPage} className="detailpage" alt="detailpage"/>
                  </Link> */}
                  </div>
                  <div id="card-text" className="ms-3">
                  <a href={companyLink}>
                    <h4>{companyName}</h4>
                  </a>  
                    <p>Publicada {hsPublished}</p>
                    <p className="mt-4">{description}</p>
                  </div>

                  <div className="card-icons mt-5 ms-5">
                    <div className="d-flex ">
                      {/* <img src={PlusMath} className="img-fluid" alt="icono mas" /> */}
                      <p className="mt-2 ms-3">{jobType}" - "{onSiteOrRemote}</p>
                    </div>

                    <div className="d-flex mt-3">
                      <img src={Address} className="img-fluid" />
                      <p className="mt-2 ms-3">{jobLocation}</p>
                    </div>

                    <div className="d-flex mt-3">
                      <img src={Megaphone} className="img-fluid" />
                      <p className="mt-2 ms-3">{datePublished}</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}
export default JobItem;


// <div className="cardJobItem card h-100 mt-3">
// < Link to="/JobDetail">
//   {/* <LogoCompany isbn= {isbn}/> */}
// </Link>
// <ul className="cardBodyJob card-body">
//   <li className="card-JobName"><h1>{jobName}</h1></li>
//   <a href={companyLink}>
//     <li className="card-textCompany"><p>{companyName}</p></li>
//   </a>
//   <li className="card-textHs">{hsPublished}</li>
//   <li className="card-rightText">{JobSalaryRange}</li>
//   <li className="card-rightText">{jobType}" - "{onSiteOrRemote}</li>
//   <li className="card-rightText">{jobLocation}</li>
//   <li className="card-rightText">{datePublished}</li>
// </ul>
// <Link to="/FavoritePage">
//   {/* <img src={heartIcon} className="icono" alt="imagen icono favoritos"/> */}
// </Link>
// </div>