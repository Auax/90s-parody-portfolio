import {Route, Routes} from "react-router-dom";
import {Home} from "views";


const Routes_ = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
    )
}

export default Routes_;