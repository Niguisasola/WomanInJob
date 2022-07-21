import { Link } from "react-router-dom";
import Address from "../../../assets/data/img/Address.png";
import Megaphone from "../../../assets/data/img/Megaphone.png";
import "../../../styles/card.css";

function JobItem({ id, jobName, companyName, hsPublished, jobLocation, onSiteOrRemote, description, datePublished, jobTitle, companyLink, companyLogo}) 
{
  return (
      <>
        <section id="cards">
          <div className="accordion" id="accordion-card">
            <div className="accordion-item mt-5">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  
                  
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex border border-1 shadow p-3 mb-5 bg-body rounded">
                  <div id="card-image" className="d-flex">
                  <Link to={`/jobdetailpage/${id}`}>
                    <img src={companyLogo} className="detailpage" alt="detailpage"/>
                  </Link>
                  </div>

                  <div id="card-text" className="ms-3">
                    <a href={companyLink}>
                    <h4>{companyName}</h4>
                    </a>  
                    <p>Publicado {hsPublished}</p>
                    <p className="mt-4">{description}</p>
                  </div>

                  <div className="card-icons mt-5 ms-5">
                    <div className="d-flex ">
                      {/* <img src={PlusMath} className="img-fluid" alt="icono mas" /> */}
                      <p className="mt-2 ms-3">{jobTitle} - {onSiteOrRemote}</p>
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
