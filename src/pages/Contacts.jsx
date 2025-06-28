import { ContactTag } from "../components/ContactTag"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useState,useEffect} from "react";
import { useLocation } from "react-router-dom";

export const Contacts =() =>{

    /**
     * No hace falta pasar informacion como props a los componentes, importando useGlobalReducer en el archivo del componente
     * se puede usar a la misma vez que se usa en el archivo que invoca al componente.
     * Ahi radica la gran utilidad de useGlobalReducer
     * Pero, si paso los parametros como props a un componente, lo estoy haciendo mas escalable al poder usarlo en demas lugares
     * que no compartan la misma base de datos
     */
    const {store, dispatch} =useGlobalReducer();
    const location = useLocation();
    const [contactosAPI, setContactosAPI] = useState([]);

/**
 * El location como segundo parametro de useEffect() permite que se actualice useLocation cada vez que se navegue entre rutas
 */
    useEffect(() =>{
        getUser();
    },[location])

    const getUser = async () =>{
        try {
            const result = await fetch("https://playground.4geeks.com/contact/agendas/agendamarlon");
            const data = await result.json();
            console.log(data); //para ver en consola todos los campos del objeto devuelto
            setContactosAPI(data.contacts);

            // Guardar directamente en el store global
            dispatch({
                type: 'add_contact',
                payload: { contactsArray: data.contacts }
        });

        } catch (error) {
            console.error("Error al obtener contactos:", error);
        }
    }


    return(
        <div className="container mt-3">
            <ul className="list-group list-unstyled">
                {store.contactos.map((contacto, index) => (
                    <li key={index}>
                        <ContactTag 
                            id={contacto.id}
                            name={contacto.name} 
                            email={contacto.email} 
                            phone={contacto.phone} 
                            address={contacto.address}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}