import {Routes, Route} from "react-router-dom";
import Heading from "./Component/Heading";
import List from "./Component/List";
import Upload from "./Component/Upload";
import Detail from "./Component/Detail";
import Edit from "./Component/Edit";

import Login from "./Component/User/Login";
import Register from "./Component/User/Register";

function App() {
    return (
        <>
            <Heading />
            <Routes>
                <Route
                    path="/"
                    element={<List />}/>
                <Route
                    path="/upload"
                    element={<Upload />}/>
                <Route
                    path="/post/:postNum"
                    element={<Detail />}/>
                <Route
                    path="/edit/:postNum"
                    element={<Edit />}/>
                <Route
                    path="/login"
                    element={<Login />}/>
                <Route
                    path="/register"
                    element={<Register />}/>
            </Routes>
        </>
    )
}
export default App;
