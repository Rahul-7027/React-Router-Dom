import React from 'react'
import "./nav.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>

                <NavLink className={({ isActive }) => ({ color: isActive ? "red" : "" })} to="/"><li>Home</li></NavLink>
                <NavLink className={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}
 to="/about"><li>About</li></NavLink>
                <NavLink className={({ isActive }) => ({ color: isActive ? "red" : "" })} to="/contact"><li>Contact US</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar
