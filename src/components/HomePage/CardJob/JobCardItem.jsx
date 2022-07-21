//import "../styles/cardstyle.css"; esto falta añadir
import { Link } from "react-router-dom";
//import heartIcon from "../assets/img/hearticon.png"; esto falta añadir

function JobItem({ jobName, companyName, companyLink, hsPublished, jobLocation, onSiteOrRemote, JobSalaryRange, isbn, datePublished, jobType }) 
{
  return (
      <>
        <div className="navOffers">
          <ul>
            <li>OFERTAS</li>
            <li>soy empresa</li>
            < Link to="/AddNewOfferPage">
            <li>ofertar empleos</li>
            </Link>
          </ul>
        </div>


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
                <Link to="/FavoritePage">
                {/* <img src={DetailPage} className="detailpage" alt="detailpage"/> */}
                </Link>
                </div>
                <div id="card-text" className="ms-3">
                
                  <h4>{companyLink}</h4>
                  <p>Publicada {hsPublished}</p>
                  <p className="mt-4">{description}</p>
                </div>
                <div className="card-icons mt-5 ms-5">
                  <div className="d-flex ">
                    <img src={PlusMath} className="img-fluid" alt="icono mas" />
                    <p className="mt-2 ms-3">Tiempo completo</p>
                  </div>
                  <div className="d-flex mt-3">
                    <img src={Address} className="img-fluid" />
                    <p className="mt-2 ms-3">Madrid,España</p>
                  </div>
                  <div className="d-flex mt-3">
                    <img src={Megaphone} className="img-fluid" />
                    <p className="mt-2 ms-3">19 de julio 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      </>
    );
}
export default JobItem;







<div className="cardJobItem card h-100 mt-3">
< Link to="/JobDetail">
  {/* <LogoCompany isbn= {isbn}/> */}
</Link>
<ul className="cardBodyJob card-body">
  <li className="card-JobName"><h1>{jobName}</h1></li>
  <a href={companyLink}>
    <li className="card-textCompany"><p>{companyName}</p></li>
  </a>
  <li className="card-textHs">{hsPublished}</li>
  <li className="card-rightText">{JobSalaryRange}</li>
  <li className="card-rightText">{jobType}" - "{onSiteOrRemote}</li>
  <li className="card-rightText">{jobLocation}</li>
  <li className="card-rightText">{datePublished}</li>
</ul>
<Link to="/FavoritePage">
  {/* <img src={heartIcon} className="icono" alt="imagen icono favoritos"/> */}
</Link>
</div>