import React from "react";
import { useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faEnvelope, faPhone, faMapMarked} from '@fortawesome/free-solid-svg-icons'

export const ContactTag = () =>{

   const {ident} = useParams()

    return(
        <div className="card mb-3">
            <div className="card-body d-flex align-items-center">
                <img
                    src="https://via.placeholder.com/100"
                    className="rounded-circle me-4"
                    width="100"
                    height="100"
                    alt="profile"
                />
                <div className="flex-grow-1">
                    <h5 className="mb-1">Nombre de contacto</h5>
                    <p className="mb-1 text-muted">
                        <FontAwesomeIcon icon={faMapMarked}/>
                    </p>
                    <p className="mb-1 text-muted">
                        <FontAwesomeIcon icon={faPhone}/>
                    </p>
                    <p className="mb-0 text-muted">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </p>
                </div>

                <div>
                    <button
                        className="btn btn-link text-dark me-2">
                            <Link to="/editcontact/escescec">
                                <FontAwesomeIcon icon={faPen} />
                            </Link>
                    </button>
                    <button
                        className="btn btn-link text-danger">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    )
}

