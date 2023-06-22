import React from 'react';
import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import Nav from './Nav';
import ColorList from './ColorList';
import ColorPage from './ColorPage';

import './App.css';

function App( {colors} ) {
    const [userColors, setUsercolors] = useState(colors)
    return (
        <div className="App">
            <Nav colors={userColors} />
            <Switch>
                <Route exact path="/colors" >
                    <ColorList colors={userColors} />
                </Route>
                <Route path="/colors/:colorName" >
                    <ColorPage colors={userColors} />
                </Route>
                <Redirect to="/colors" />
            </Switch>      
        </div>
    );
}

App.defaultProps = {
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
}

export default App;
