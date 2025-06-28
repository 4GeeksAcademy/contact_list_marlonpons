import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const EditContact =() => {

    const {ident} = useParams()
    const navigate = useNavigate()

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    // Traer los datos del contacto actual
    useEffect(() => {
      getContact();
    }, [ident]);

    const getContact = async () =>{
        try {
            const result = await fetch(`https://playground.4geeks.com/contact/agendas/agendamarlon/contacts/${ident}`);
            const data = await result.json();

            if (data && typeof data === "object") {
                setFullName(data.full_name);
                setEmail(data.email);
                setPhone(data.phone);
                setAddress(data.address);
            } else {
                console.warn("El contacto no es un objeto válido:", data);
            }
        } catch (error) {
            console.error("Error al cargar el contacto:", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedContact = {
            name: fullName,
            email: email,
            phone: phone.toString(),
            address: address,
            agenda_slug: "agendamarlon"
        };

                try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/agendamarlon/contacts/${ident}`, {
                method: "PUT",
                body: JSON.stringify(updatedContact),
                headers: { "Content-Type": "application/json" }
            });

            if (response.ok) {
                alert("Contacto modificado con éxito");
                navigate("/");
            } else {
                const errorData = await response.json();
                console.error("Error al actualizar contacto:", errorData);
            }
        } catch (error) {
            console.error("Error de red o servidor:", error);
        }
    };


    return (
        <div className="container">
            <h2>Editar informacion de contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Full Name</label>
                    <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Phone</label>
                    <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label>Address</label>
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">
                    Submit Changes
                </button>
                <Link to="/" className="btn btn-secondary ms-3">
                    Cancel
                </Link>
            </form>
        </div>
    )
}