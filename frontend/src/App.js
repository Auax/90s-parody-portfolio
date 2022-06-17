import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import Routes from "./Routes";


// Sitemap

function App() {
    return (
        <div className="App">
            <Router>
                {/*<NavBar/>*/}
                <Routes/>
                {/*<Footer/>*/}
            </Router>
        </div>
    );
}


export default App;