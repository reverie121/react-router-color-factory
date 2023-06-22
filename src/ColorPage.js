import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import './ColorPage.css';

function ColorPage() {
    let { colorName } = useParams();
    return(
        <div className="ColorPage" style={{backgroundColor: colorName}}>
            <p style={{color: 'white'}}>This is white text over the color {colorName} </p>        

            <p style={{color: 'lightgrey'}}>This is light grey text over the color {colorName} </p>      
            <p style={{color: 'darkgrey'}}>This is dark grey text over the color {colorName} </p>  

            <p style={{color: 'black'}}>This is black text over the color {colorName} </p>
                

    
        </div>
    )
}

export default ColorPage;