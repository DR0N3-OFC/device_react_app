import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div class="container-fluid">
        <Link className='navbar-brand' to="/">DeviceAPI</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className='nav-item'>
              <Link className='nav-link active' to="/devices">Dispositivos</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
