import React, {  useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    NavDropdown,
  } from "react-bootstrap";
  import Link from 'next/link'
  import { FaBars } from 'react-icons/fa';
  import { GrClose } from 'react-icons/gr';

// IMPORTED STUFF
  // import { ReactComponent as CloseMenu } from "./assets/x.svg";
  // import { ReactComponent as MenuIcon } from "./assets/menu.svg";
  // import { ReactComponent as Logo } from "./assets/logo.svg";
  


import NavBarCSS from "../styles/NavBar.module.css";

// import Image from 'next/image'
// import Link from 'next/link'

// import { FaBars } from "react-icons/fa";
// import "./navbar.css";
// import styles from '../styles/navbar.module.css'
// import Image from 'next/image';

function NavBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    return (
<div id="header" className="sticky-top d-flex align-items-center justify-content-center p-4"  style={{ background:"black" }}>
<div className="container d-flex align-items-center">
  <div className="logo me-auto">
    <Link href= "/">
    <a>
      <h1>Michael</h1>
    {/* <img src='assets/img/logo/logosc.png' width={50} height={60}  alt='The stella center logo'/> */}
    </a>
    </Link>
  </div>
<nav id="navbar"  className={click ? "nav-options active " : "nav-options "}>
      
  <ul className=" m-0 p-1  navigationBar" style={{listStyle: "none", color:"white" }}>

    <li className="option" onClick={closeMobileMenu}>
    <Link href="/">
      <a>Home</a>
    </Link>
    </li>

       <li className="option" onClick={closeMobileMenu}>
    <Link href="/#about">
      <a> About</a>
    </Link>
    </li>

    <li className="option" onClick={closeMobileMenu}>
    <Link href="/#resume">
      <a> Resume</a>
    </Link>
    </li>
    <li className="option" onClick={closeMobileMenu}>
    <Link href="/#portfolio">
      <a> Portfolio</a>
    </Link>
    </li>

    <li className="thedropdown option">
    <Link href="/#blogs">
      <a className="thedropdown  ">
        <span className="thedropdown ">More</span> 
        {/* <i className="bi bi-chevron-down"></i> */}
      </a>
      </Link>
            <ul  className="  thedropdown-content animate__animated animate__fadeInUp ">
              <li onClick={closeMobileMenu}>
                <a  href="https://drive.google.com/drive/folders/1jPUA3rteZ1FD6_gUF1TpJmSU8qyiUZ6r" target="_blank" rel="noopener noreferrer">Certificates</a>
             </li>
             {/* <li onClick={closeMobileMenu}>
                <Link href="#">
                <a>Blogs</a>
             </Link>
             </li> */}
            </ul>
            </li>

    <li className="option" onClick={closeMobileMenu}>
    <Link href="/#contact">
      <a>Contact</a>
    </Link>
    </li>
    

    {/* <li className="option " onClick={closeMobileMenu}>
    <Link href="/donate">
      <a className="major">Donate</a>
    </Link>
    </li> */}


  </ul>
  </nav>

<div className="mobile-menu" onClick={handleClick}>
  {click ? (
    // <GrClose className="menu-icon text-light"/>
    <h1>x</h1>
  ) : (
    <FaBars className="menu-icon " style={{ color:"white" }}/>

  )}
</div>
</div>
</div>
    )
}

export default NavBar
