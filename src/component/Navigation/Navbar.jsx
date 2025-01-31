import React from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>

                <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/"><li>Home</li></NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/about"><li>About</li></NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/contact"><li>Contact US</li></NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/movie"><li>Movie</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar
