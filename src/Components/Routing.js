import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Layout from "./Layout";

function Routing () {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                </Route>
            </Routes>
        </div>
    )
}

export default Routing