import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './NewColorForm.css';

function NewColorForm( { userColors, setUserColors } ) {

    const history = useHistory();

    // Sets State for the form data.
    const [formData, setFormData] = useState({color: ""});

    // Handles value changes (for inputs).
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // Handles form submition to display the Madlib and re-set form State.
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserColors([formData["color"], ...userColors])
        setFormData({color: ""});
        history.push("/");
    }    

    return(
        <form className="NewColorForm">
            <div>
                <label htmlFor="color">Add a Color: </label>
                <input
                    id="color"
                    type="text"
                    name="color"
                    placeholder="css color value"
                    value={formData["color"]}
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleSubmit}>Build Color Box</button>
        </form>
    )
}

export default NewColorForm;