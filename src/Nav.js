import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './Nav.css';

function Nav( { colors } ) {
    return(
        <div className="Nav">
            <Link to="../">Color List</Link>
            <Link to="../colors/new">Add</Link>
            {colors.map(c => 
                <Link to={`../colors/${c}`} key={c}>{c}</Link>
                )}
        </div>
    )
}

export default Nav;