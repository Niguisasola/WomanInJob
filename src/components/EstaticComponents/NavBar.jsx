import {Link, NavLink} from "react-router-dom"
import logo from '../../assets/data/img/logo.png'

function NavBar (){
  return (
   <div>
       <nav className="navbar navbar-expand-lg">
         <div className="container-logo">
           <Link to="/Home"><img className="img-fluid" src={logo} width="80" height="80" alt="Logo WinJob"></img></Link>
         </div>
        
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
               <Link className="nav-link pl-4" to="/CategoryList">Contacto<span className="sr-only"></span></Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link pl-4" to="/Product">Favoritos</Link>
             </li>
           </ul>
         </div>
           <form class="d-flex" role="search">
                 <input class="form-control" type="search" aria-label="Search"></input>
                 <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-search"></i></button>
           </form>
       </nav>
     </div>
)
}
export default NavBar;
 
 
 
 
 
 
        {/*  <div className="container">
          <div className="logo">
              <img src={logo} alt="Logo WinJobs"/>
          </div>  
        
              <div className="nar">
                  <a className="text">Contacto</a>
                  <a className="text">Favorito</a>
              </div>
              <form className="form-nav">
                  <input className="form" type="search"/>
                  <i className="bi bi-search"></i>
              </form>
          </div> */}