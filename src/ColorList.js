import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './ColorList.css';

function ColorList( { colors } ) {
    return(
        <div className="ColorList">
            <h2>Welcome to the Color Factory!</h2>
            <h3>Choose a Color...</h3>
            <div className="ColorsContainer">
                {colors.map(c => 
                    <Link to={`./colors/${c}`}  key={c}>
                        <div style={{backgroundColor: c}}>
                            <p style={{color: 'white'}}>{c}</p>
                            <p style={{color: 'black'}}>{c}</p>
                        </div>                        
                    </Link>
                    )}
            </div>
        </div>
    )
}

export default ColorList;