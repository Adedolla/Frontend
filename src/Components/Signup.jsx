import React from 'react'

const Signup = () => {
  return (
    <>
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
          <div class="container">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="#">Action 1</a>
                  <a class="dropdown-item" href="#">Action 2</a>
                </div>
              </li>
            </ul>
            <form class="d-flex my-2 my-lg-0">
              <input class="form-control me-sm-2" type="text" placeholder="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
    </div>
  <div className=" d-flex justify-content-center align-items-center m-auto vh-100 bg-primary">
      <div className='  p-5 rounded'> 
       <form action="">
            <h3>Sign Up</h3>
            <div className='mb-2'>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='Enter Your Email' className='form-control'/>
            </div>

            <div className='mb-2'>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter Your Password' className='form-control'/>
            </div>
            <div className='mb-2'>
              <input type="checkbox" className='custom-control custom-checkbox' id='check' />
              <label htmlFor="check" className='custom-inout-label'>
                Remember me?
              </label>
              <div className='d-grid'>
                  <button className='btn btn-primary'>SignIn</button>
              </div>
            </div>
    <p className='text-right'>
      Forgot <a href="">Password? <a href=""></a></a>
    </p>
       </form>
      </div>
  </div>
    
    
    </>
  )
}

export default Signup