import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function NavBar() {
  return (
    <nav className='navbar'>
        <Link to = '/'> Home </Link>
        <Link to = '/dogs'> Dogs </Link>
        <Link to = '/checkout'> My Cart </Link>
    </nav>
  )
}

export default NavBar