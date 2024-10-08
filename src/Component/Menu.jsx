import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiMenuBurger } from 'react-icons/ci'

export default function Menu(props) {

    const menuHandler = () => {
        let menu = document.querySelector(".nav-menu")
        menu.classList.toggle('active')
    }

    return (
        <nav className="navbar">
            <div className="menu-container">
                <NavLink to={`/`} className="logo">React-Portfolio</NavLink>
                
                <button className="btn toggler" onClick={menuHandler}>
                    <CiMenuBurger/>
                </button>

                <ul className="nav-menu">
                    <li className='nav-item'>
                        <NavLink to={`/`} className="nav-link">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/about`} className="nav-link">About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/resume`} className="nav-link">Resume</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/projects`} className="nav-link">Projects</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={`/contact`} className="nav-link">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

