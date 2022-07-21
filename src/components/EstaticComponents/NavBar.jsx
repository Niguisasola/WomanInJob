import {Link, NavLink} from "react-router-dom"
import logo from '../../assets/data/img/logo.png'
import lupa from '../../assets/data/img/search.png'

function NavBar (){
  return (
   <div>
       <nav className="navbar navbar-expand-lg">
         <div className="container-logo">
           <Link to="/Home"><img className="img-fluid" src={logo} width="80" height="80" alt="Logo WinJob"></img></Link>
         </div>
        
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
               <NavLink className="nav-link pl-4" to="/contactus">Contacto<span className="sr-only"></span></NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link pl-4" to="/jobfavorites">Favoritos</NavLink>
             </li>
           </ul>
         </div>
           <form className="d-flex search-bar" role="search">
                 <input className="form-control rounded-pill" type="search" aria-label="Search"></input>
                 <button className="btn btn-outline-success" type="submit"><img className="search" src={lupa}></img><i className="fa-solid fa-search"></i></button>
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