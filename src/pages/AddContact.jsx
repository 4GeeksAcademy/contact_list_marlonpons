import React from "react";
import { useState, useEffect} from "react";
import { useNavigate,Link, useParams } from "react-router-dom";

export const AddContact = () => {

    const navigate = useNavigate();

    const cancelOnClick = () => {
        navigate("/")
    }

    const handleSubmit= async (e) =>{

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
                    ></input>
                </div>

                <div>
                    <label className="form-label ps-3" htmlFor="field">Email</label>
                    <input
                    type="email"
                    className="form-control ms-1 mb-3"
                    id="email-field"
                    placeholder="Email"
                    ></input>
                </div>

                <div>
                    <label className="form-label ps-3" htmlFor="field">Phone Number</label>
                    <input
                    type="number"
                    className="form-control ms-1 mb-3"
                    id="phone-field"
                    placeholder="Phone number"
                    ></input>
                </div>

                <div>
                    <label className="form-label ps-3" htmlFor="field">Address</label>
                    <input
                    type="text"
                    className="form-control ms-1 mb-3"
                    id="address-field"
                    placeholder="Address"
                    ></input>
                </div>

                <button className="btn btn-primary" type="submit">Save</button>
                <button className="btn btn-danger ms-3" onClick={() => cancelOnClick()}>Cancel</button>
            </form>
        </div>
    )
}