import { Link } from "react-router-dom";
import "./TopHeader.css";

function TopHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
   {/* Container wrapper  */}
    <div className="container-fluid">
     {/* Toggle button */}
      <button className="navbar-toggler px-0" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarExampleOnHover" aria-controls="navbarExampleOnHover" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
  
      {/* Collapsible wrapper  */}
      <div className="collapse navbar-collapse" id="navbarExampleOnHover">
       {/* Left links  */}
        <ul className="navbar-nav me-auto ps-lg-0" style={{paddingLeft: "0.15rem"}}>
          <li className="nav-item">
            <Link className="nav-link" to=''>Regular link</Link>
          </li>
          {/* Navbar dropdown  */}
          <li className="nav-item dropdown dropdown-hover position-static">
            <Link className="nav-link dropdown-toggle" to='' id="navbarDropdown" role="button"
              data-mdb-toggle="dropdown" aria-expanded="false">
              Mega menu
            </Link>
          {/* Dropdown menu  */}
            <div className="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style={{borderTopLeftRadius:"0",borderTopRightRadius:"0"}}>
  
              <div className="container">
                <div className="row my-4">
                  <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                    <div className="list-group list-group-flush">
                      <Link to='' className="list-group-item list-group-item-action">Lorem ipsum</Link>
                      <Link to='' className="list-group-item list-group-item-action">Dolor sit</Link>
                      <Link to='' className="list-group-item list-group-item-action">Amet consectetur</Link>
                      <Link to='' className="list-group-item list-group-item-action">Cras justo odio</Link>
                      <Link to='' className="list-group-item list-group-item-action">Adipisicing elit</Link>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                    <div className="list-group list-group-flush">
                      <Link to='' className="list-group-item list-group-item-action">Explicabo voluptas</Link>
                      <Link to='' className="list-group-item list-group-item-action">Perspiciatis quo</Link>
                      <Link to='' className="list-group-item list-group-item-action">Cras justo odio</Link>
                      <Link to='' className="list-group-item list-group-item-action">Laudantium maiores</Link>
                      <Link to='' className="list-group-item list-group-item-action">Provident dolor</Link>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
                    <div className="list-group list-group-flush">
                      <Link to='' className="list-group-item list-group-item-action">Iste quaerato</Link>
                      <Link to='' className="list-group-item list-group-item-action">Cras justo odio</Link>
                      <Link to='' className="list-group-item list-group-item-action">Est iure</Link>
                      <Link to='' className="list-group-item list-group-item-action">Praesentium</Link>
                      <Link to='' className="list-group-item list-group-item-action">Laboriosam</Link>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="list-group list-group-flush">
                      <Link to='' className="list-group-item list-group-item-action">Cras justo odio</Link>
                      <Link to='' className="list-group-item list-group-item-action">Saepe</Link>
                      <Link to='' className="list-group-item list-group-item-action">Vel alias</Link>
                      <Link to='' className="list-group-item list-group-item-action">Sunt doloribus</Link>
                      <Link to='' className="list-group-item list-group-item-action">Cum dolores</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {/* Left links */}
      </div>
   {/* Collapsible wrapper  */}
    </div>
    {/* Container wrapper */}
  </nav>
  )
}

export default TopHeader
