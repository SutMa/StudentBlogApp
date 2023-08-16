import React, { useContext } from 'react'
import Logo from "../img/BlogLogo.png"
import { Link } from 'react-router-dom'
import {AuthContext} from '../context/authContext'
function Navbar() {

  const {currentUser, logout} = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo"><img src={Logo} alt="" /></div>
        <div className="links">
          <Link className='link' to='/?cat=cs'>
            <h6>CS</h6>
          </Link>
          <Link className='link' to='/?cat=design'>
            <h6>DESIGN</h6>
          </Link>
          <Link className='link' to='/?cat=engr'>
            <h6>ENGR</h6>
          </Link>
          <Link className='link' to='/?cat=math'>
            <h6>MATH</h6>
          </Link>
          <Link className='link' to='/?cat=jobs'>
            <h6>JOBS</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={logout}>Logout</span> : <Link className='link' to="/login">Login</Link>}
          <span className='write'>
            <Link className='link'to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar