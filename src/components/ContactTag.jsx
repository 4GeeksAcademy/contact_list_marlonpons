import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faEnvelope, faPhone, faMapMarked} from '@fortawesome/free-solid-svg-icons'

export const ContactTag = ({id,name, email, phone, address}) =>{

    const navigate = useNavigate();

    const handleDelete = async () =>{
        const confirm = window.confirm("Estas seguro que desea eliminar el contacto?");
        if(!confirm) 
            return 
        try{
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendamarlon/contacts/${id}`, {
            method: "DELETE"
            });

            if (response.ok) {
                alert("Contacto eliminado correctamente");
                window.location.reload(); // para recargar la pagina
            } else {
                alert("No se pudo eliminar el contacto.");
            }
        } catch (error) {
            console.error("Error al eliminar contacto:", error);
        }
    };

    const handleEdit = () => {
        navigate(`/editcontact/${id}`);
    };


    return(
        <div className="card mb-3">
            <div className="card-body d-flex align-items-center">
                <img
                    src="https://media.istockphoto.com/id/2205964640/es/vector/young-adult-woman-cartoon-portrait-drawing.jpg?s=1024x1024&w=is&k=20&c=6PzI66iguWBF5GNv4W-XfQyOtIO3nopVU14JPMKJIBQ="
                    className="rounded-circle me-4"
                    width="100"
                    height="100"
                    alt="profile"
                />
                <div className="flex-grow-1">
                    <h5 className="mb-1">{name}</h5>
                    <p className="mb-1 text-muted">
                        <FontAwesomeIcon icon={faMapMarked}/>
                        {address}
                    </p>
                    <p className="mb-1 text-muted">
                        <FontAwesomeIcon icon={faPhone}/>
                        {phone}
                    </p>
                    <p className="mb-0 text-muted">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        {email}
                    </p>
                </div>

                <div>
                    <button
                        className="btn btn-link text-dark me-2" onClick={handleEdit}>
                                <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button
                        className="btn btn-link text-danger" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    )
}

