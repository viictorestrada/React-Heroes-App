import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import A_64 from '../../../assets/img/A-64.png';

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-faded">
        < button 
        className = "navbar-toggler navbar-toggler-right"
        data-toggle = "colapse"
        data-target = "#navbarSopportedContent"
        aria-controls = "navbarSopportedContent" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" to="home">
          <img src={A_64} alt="Logo"/>
        </Link>

        < div className = "collapse navbar" id = "navbarSopportedContent" >
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/heroes">Heroes</NavLink>
            </li>

          </ul>
        </div>
      </nav>
  )
}

export default withRouter(Navbar)
