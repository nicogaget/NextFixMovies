import React, { Component } from "react";
import { NavLink} from "react-router-dom"
export default class Header extends Component {
  render() {
    return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/"> Dyma Movie</a>
      <button className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink to="/films" href="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/favoris" href="/" className="nav-link" activeClassName="active">Favoris</NavLink>
        </li>
      </ul>
      </div>
      
      </header>
      )
  }
}
