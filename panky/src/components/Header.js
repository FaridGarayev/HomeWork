import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/Panky.png';


function headerdisplayoff() {
    const head = document.getElementById("head");
    const pages = document.querySelector(".pages");
    const headericon = document.getElementById("headicon");
    const headericon2 = document.getElementById("headicon2");
    const headericon3 = document.getElementById("headicon3");
    const headericon4 = document.getElementById("headicon4");
    const arrowicon = document.querySelector(".arrowdiv");
    const burgericon = document.querySelector(".burgerdiv");

    headericon4.style.display = "block";
    headericon3.style.display = "block";
    headericon2.style.display = "block";
    headericon.style.display = "block";
    arrowicon.style.display = "block";
    burgericon.style.display = "none";
    pages.style.paddingLeft = "3%";
    head.style.transform = "translateX(-200px)";
}

function headerdisplayon() {
    const head = document.getElementById("head");
    const headericon = document.getElementById("headicon")
    const headericon2 = document.getElementById("headicon2");
    const headericon3 = document.getElementById("headicon3");
    const headericon4 = document.getElementById("headicon4");
    const pages = document.querySelector(".pages")
    const arrowicon = document.querySelector(".arrowdiv")
    const burgericon = document.querySelector(".burgerdiv")

    headericon.style.display = "none";
    headericon2.style.display = "none";
    headericon3.style.display = "none";
    headericon4.style.display = "none";
    arrowicon.style.display = "none";
    burgericon.style.display = "block";
    pages.style.paddingLeft = "17%";
    head.style.transform = "translateX(0px)";
}

function headerpaddingleft() {
    const pages = document.querySelector(".pages");
    pages.style.paddingLeft = "3%";
}


class Header extends Component {
    render() {
        return (
            <header id="head">

                <div className="burgerdiv" onClick={headerdisplayoff}>
                    <i class="fas fa-bars"></i>
                </div>

                <div className="arrowdiv" onClick={headerdisplayon}>
                    <i class="fas fa-arrow-circle-right"></i>
                </div>



                <img src={logo} alt="" />
                <div className="nav-link" id="nav-link">
                    <ul>
                        <li><NavLink exact to="/" className="navlink" activeClassName="active" >Home <i class="fas fa-home" onClick={headerpaddingleft} id="headicon"></i></NavLink></li>
                        <li><NavLink to="/About" className="navlink" activeClassName="active" >About <i class="fas fa-briefcase" onClick={headerpaddingleft} id="headicon2"></i></NavLink></li>
                        <li><NavLink to="/Receipts" className="navlink" activeClassName="active" >Receipts <i class="fas fa-receipt" onClick={headerpaddingleft} id="headicon3"></i></NavLink></li>
                        <li><NavLink to="/ContactUs" className="navlink" activeClassName="active" >Contact us <i class="fas fa-id-card-alt" onClick={headerpaddingleft} id="headicon4"></i></NavLink></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header
