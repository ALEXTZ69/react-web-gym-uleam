import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
            <Link to='/'>
                <img alt='' src='./LogoUleamBlancoNoLetras.png' width='50'/>
            </Link>
            <Link className="navbar-brand" href='/'>ULEAM GYM</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                <Link className="nav-link text-white" to='/'>Inicio</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white" to='/Planes'>Planes</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-white" to='/Informacion'>Informacion</Link>
                </li>
            </ul>
            <form className="d-flex" role="button">
                <Link className="btn btn-light ml-auto" to='/Inscripcion' type="button">Inscripcion</Link>
            </form>
            </div>
        </div>
        </nav>

  )
}

export default NavBar