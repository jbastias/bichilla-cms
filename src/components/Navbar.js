import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/bichilla-logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Bichilla" style={{ width: '48px' }} />
          </figure>
          <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '20px' }}>Bichilla</span>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
        acerca de
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
