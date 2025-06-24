import { ContactTag } from "../components/ContactTag"

export const Contacts =() =>{
    return(
        <div className="container mt-3">
            <ul className="list-group">
                <li className="list-group-item border-0"><ContactTag/></li>
            </ul>
        </div>
    )
}