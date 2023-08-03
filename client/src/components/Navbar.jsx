import React from 'react'
import Logo from "../img/BlogLogo.png"
import { Link } from 'react-router-dom'

function Navbar() {
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
          <span>JOhn</span>
          <span>Logout</span>
          <span className='write'>
            <Link to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar