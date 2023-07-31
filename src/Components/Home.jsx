import React from 'react'

const Homepage = () => {
  return (
    <>
     <nav class="navbar bg-info fw-bold text-capitalize navbar-expand-sm navbar-light ">
          <div class="container">
          <a class="navbar-brand fw-bold  fs-4" href="/"> My Space <FaSmile/></a>
          <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"  aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse"  id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              
              <li class="nav-item">
                
              </li>
              <li class="nav-item">
               </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle fs-4 fw-bold" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sections</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item fw-bold" href="./Project" aria-current="page">My Project <span class="visually-hidden">(current)</span></a>
                  <a class="dropdown-item fw-bold" href="./Cal">Resumes</a>
                  <a class="dropdown-item fw-bold" href="./Contact">Contact</a>
                  <a class="dropdown-item fw-bold" href="./About" aria-current="page">About <span class="visually-hidden">(current)</span></a>                         
                </div>
              </li>
            </ul>
            <a class="navbar-brand" href="/"> <FaSmile/></a>
            
            {/* <form class="d-flex my-2 my-lg-0">
              <input class="form-control me-sm-2" type="text" placeholder="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Homepage