import React from 'react'

function Navbar() {
  return (
    <nav className="navbar bg-primary" >
  <div className="container-fluid">
    <a className="navbar-brand display-1 fsts-italic fw-bold text-light  ">Quote Generator</a>
    <form className="d-flex" role="search">
      <input className="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-light " type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default Navbar
