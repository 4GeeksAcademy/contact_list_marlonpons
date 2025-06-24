import { Link, useParams, useNavigate } from "react-router-dom";

export const EditContact =() => {

    const {ident} = useParams()
    const navigate = useNavigate()

    const moveHome = () => {
        alert("Cliente modificado")
        navigate("/")
    }

    return (
        <div className="container">
            <h1>Editar informacion de: {ident}</h1>
            <Link to="/">
                <button>Go to contact list</button>
            </Link>
            <button onClick={() => moveHome()}>
                Submit
            </button>
        </div>
    )
}