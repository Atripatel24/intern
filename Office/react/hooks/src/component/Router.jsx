import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>

        <NavLink to="/">Condition Example</NavLink> <br />
        <NavLink to="/input">input example</NavLink> <br />
        <NavLink to="/ref">useref example</NavLink> <br />
        </>
    )
}

export default Navbar