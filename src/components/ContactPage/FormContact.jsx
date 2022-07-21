import { Link } from "react-router-dom";
import '../../styles/contacts.css';

function FormContact(){
return(
<>
    <div className="container">
        <header className="header">
          <h1 id="title" className="text-center">CONTACTO</h1>
        </header>
        <form id="survey-form">
          <div className="form-group">
            <label id="name-label" htmlFor="name">NOMBRE</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Escribe tu nombre"
              required
            />
          </div>
          <div className="form-group">
            <label id="email-label" htmlFor="email">EMAIL</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Escribe tu Email"
              required
            />
          </div>
      
          <div className="form-group">
            <label id="message-label" htmlFor="message">MENSAJE</label>
            <textarea
              id="comments"
              className="input-textarea"
              name="comment"
              placeholder="Escribe tu consulta..."
            ></textarea>
          </div>

        <div id="btn">
            <Link to = "/Home">       
                <button type="submit" id="submit" className="submit-button">
                ENVIAR
                </button>
            </Link>
        </div>
        </form>
    </div>
</>
)
}

export default FormContact;