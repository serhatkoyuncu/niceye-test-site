import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            Header
            <Link to='/home'>
                Home
            </Link>
            <Link to='/about'>
                About
            </Link>
        </div>
    )
}

export default Header
