import React from "react";
import { Link } from "react-router-dom";
import WelcomePhoto from "../../assets/data/img/WelcomePhoto.jpg"

function Welcome(){
return(
<>
    <div className = "">
            <Link to ="/Home">
              <img className="welcome-img img-fluid" src={WelcomePhoto} alt = "Imagen Women in Job"/>
            </Link>
    </div>
</>
 )
}

export default Welcome;