import React, { Component } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
import logo from './Assests/logo2.png'

class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="custom-nav navbar navbar-expand-lg navbar-light bg-light">
        <button className="custom-toggle navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand logo" style={{color:'white'}} href="#">
          <img src={logo} alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="fa fa-search"></span>
        </button>
        <div className="custom-drop collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="custom-ul navbar-nav mr-auto">
            <li className="nav-item  ">
              <a className="nav-link" href="#"><Link to="/"> Home</Link> <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/product">Product</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Career</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/about">About Us</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/contact">Contact Us</Link></a>
            </li>
             
            
          </ul>
        
        </div>
        <div className=" custom-form collapse navbar-collapse" id="navbarSupportedContent1">
        <form className=" form-inline my-2 my-lg-0 d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              <span className="fa fa-search"></span>
            </button>
          </form>
        </div>
      </nav>
     

      
      </>
    );
  }
}

export default Navbar;
