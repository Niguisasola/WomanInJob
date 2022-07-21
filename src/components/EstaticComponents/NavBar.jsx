import {Link, NavLink} from "react-router-dom"
import logo from '../../assets/data/img/logo.png'
 
function NavBar (){
   return (
   <>
           <div className="container">
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
           </div>
 
</>
)
}
 
export default NavBar;