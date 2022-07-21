import { Link } from "react-router-dom";

function FormNewOffer(){
return(
<>
    <div className="d-flex justify-content-center">
        <div className="container-sm w-50 p-3 mt-4">
            <p className="titleForm">PUBLICAR OFERTA</p>
            <p className="subtitleForm">Información de la empresa</p>
            <div className="mb-3">
                <label for="InputCompany" className="form-label text-white">Empresa</label>
                <input type="text" className="form-control" id="InputCompany"/>
            </div>
            <div className="mb-3">
                <label for="InputEmail" className="form-label text-white">Email</label>
                <input type="text" className="form-control" id="InputEmail"/>
            </div>
            <div className="mb-3">
                <label for="PerInCharge" className="form-label text-white">Funcionario a cargo</label>
                <input type="text" className="form-control" id="InputPerInCharge"/>
            </div>
            <p className="subtitleForm">Información del cargo</p>
            <div className="mb-3">
                <label for="ChargeAvail" className="form-label text-white">Cargo Disponible</label>
                <input type="text" className="form-control" id="ChargeAvail"/>
            </div>
            <div className="mb-3">
                <label for="JobDescription" className="form-label text-white">Descripción</label>
                <input type="text" className="form-control" id="Description"/>
            </div>
            <Link to = "/Home">
            <button class="btn btn-light m-3">Ofertar</button>
            </Link>
        </div>
    </div>
</>
)
}

export default FormNewOffer;