import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/impressum">Impressum</Link>
        </nav>
    )
}

export default Navigation