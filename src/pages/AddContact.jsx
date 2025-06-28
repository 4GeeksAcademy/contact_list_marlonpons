/**
 * El inputmode usado en form es para mejorar la UX
 * Permite desplegar el teclado adecuado dependiendo del valor del atributo
 * Funciona en Android y iOS
 */

import React from "react";
import { useState, useEffect} from "react";
import { useNavigate,Link, useParams } from "react-router-dom";



export const AddContact = () => {

/**
 * Un useState para cada campo del input
 * para guardarlo usando el evento onChange
 */
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const cancelOnClick = () => {
        navigate("/")
    }

    const handleSubmit= async (e) =>{
        e.preventDefault(); // evita que se recargue la página

        /**Pequeña validacion para no introducir campos vacios */
        if (!fullName || !email || !phone || !address) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        /**
         * newContact es el objeto que va a recibir la API
         */
        const newContact = {
            name: fullName,
            phone: phone.toString(),
            email: email,
            address: address,
        };

        try{
            const response = await fetch("https://playground.4geeks.com/contact/agendas/agendamarlon/contacts",{
                method: "POST",
                body: JSON.stringify(newContact),
                headers: {"Content-type": "application/json"}
            });

                if(response.ok){
                    const data = await response.json();
                    console.log("Contacto creado y guardado exitosamente:", data);
                    navigate("/") /**Regresar al home */
                } else{
                    const errorData = await response.json();
                    console.error("Error al crear contacto:", errorData);
                }

        } catch (error) {
            console.error("Error de red o servidor:", error);
        }
    }


    return (
        <div className="container">
            <h2>Add a new contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label ps-3" htmlFor="field">Full Name</label>
                    <input
                    type="text"
                    className="form-control ms-1 mb-3"
                    id="name-field"
                    placeholder="Full Name"
                    inputMode="text"
                    value={fullName}
                    onChange={(e)=> setFullName(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label className="form-label ps-3" htmlFor="field">Email</label>
                    <input
                    type="email"
                    className="form-control ms-1 mb-3"
                    id="email-field"
                    placeholder="Email"
                    inputMode="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label className="form-label ps-3" htmlFor="field">Phone Number</label>
                    <input
                    type="number"
                    className="form-control ms-1 mb-3"
                    id="phone-field"
                    placeholder="Phone number"
                    inputMode="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label className="form-label ps-3" htmlFor="field">Address</label>
                    <input
                    type="text"
                    className="form-control ms-1 mb-3"
                    id="address-field"
                    placeholder="Address"
                    inputMode="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    ></input>
                </div>

                <button className="btn btn-primary" type="submit">Save</button>
                <button className="btn btn-danger ms-3" onClick={() => cancelOnClick()}>Cancel</button>
            </form>
        </div>
    )
}