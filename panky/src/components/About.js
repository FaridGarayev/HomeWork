import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import sec1img from '../img/aboutus2.png'
import sec2img from '../img/aboutus3.png'
import sec3img from '../img/aboutus4.png'

import galery1 from '../img/galery1.jpg'
import galery2 from '../img/galery2.jpg'
import galery3 from '../img/galery3.jpg'
import galery4 from '../img/galery4.jpg'
import galery5 from '../img/galery5.jpg'
import galery6 from '../img/galery6.jpg'
import galery7 from '../img/galery7.jpg'
import galery8 from '../img/galery8.jpg'

import Footer from './Footer';


import $ from 'jquery'
$(document).ready(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 50) {
            $(".images").addClass('imagesanimate');
            $(".textabout").addClass('textaboutanimate');
        } else {
            $(".images").removeClass('imagesanimate');
            $(".textabout").removeClass('textaboutanimate');
        }
        if (top >= 730) {
            $(".sec3box").addClass('sec3boxanimate');
        } else $(".sec3box").removeClass('sec3boxanimate');
    });
});


function imgzoom() {
    const photosid = document.getElementById("photos");
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    photosid.style.display = "block";
}

function xbutton() {
    const photosid = document.getElementById("photos");
    const body = document.querySelector("body");
    body.style.overflow = "scroll";
    photosid.style.display = "none";
}

const Title = () => {
    return (
        <div className="titleabout">
            <h5>Have a Seat and Listen</h5>
            <div className="titlepages">
                <span></span>
                <h1> About us </h1>
                <span></span>
            </div>
        </div>
    )
}

const Aboutus = () => {
    return (
        <div className="aboutushome">
            <div className="row">

                <div className="col-lg-6 col-md-12">
                    <div className="images"></div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="textabout">
                        <div className="titlepages">
                            <h1> Panky </h1>
                            <span></span>
                        </div>
                        <h5>Since 1982</h5>
                        <p>
                            Given the freedom to dream up the best in innovative food, drinks, service, ambiance and architecture, we have found profound success in developing restaurants that our customers have wholeheartedly embraced.
                        </p>
                        <p>
                            From our beginnings as a single restaurant in 1982, as with every new restaurant concept, we are looking to make a connection.
                        </p>
                        <Link to="/Receipts"><button>Food Menu</button></Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

const Section3Box = (props) => {
    return (
        <div className="col-md-4">
            <div className="sec3box">
                <img src={props.img} alt={props.title} />
                <h3>{props.title}</h3>
                <p>{props.contain}</p>
            </div>
        </div>
    )
}

const Section3 = () => {
    return (
        <div className="sec3">
            <div className="container">
                <div className="row px-5 pt-4">
                    <Section3Box img={sec1img} title="Fresh Food" contain="Oat cake wafer muffin cotton candy cupcake muffin gummies candy halvah. Jelly beans bonbon fruitcake biscuit sweet roll macaroon bonbon." />
                    <Section3Box img={sec2img} title="Cozy Atmosphere" contain="Oat cake wafer muffin cotton candy cupcake muffin gummies candy halvah. Jelly beans bonbon fruitcake biscuit sweet roll macaroon bonbon." />
                    <Section3Box img={sec3img} title="Incredible Desserts" contain="Oat cake wafer muffin cotton candy cupcake muffin gummies candy halvah. Jelly beans bonbon fruitcake biscuit sweet roll macaroon bonbon." />
                </div>
            </div>
        </div>
    )
}

const GaleryBox = (props) => {
    return (
        <div className="">
            <div className="galerybox">
                <div className="title">
                    <img src={props.img} alt={props.title} />
                    <h3>{props.title}</h3>
                    <p>Take a look</p>
                </div>
            </div>
        </div>
    )
}

const Galery = () => {
    return (
        <div className="galery">
            <h5>Our food</h5>
            <div className="titlepages">
                <span></span>
                <h1> Gallery </h1>
                <span></span>
            </div>

            <div className="row pt-4 px-2">
                <div className="col-md-6 col-sm-6 col-lg-3 col-xs-6" onClick={imgzoom}>
                    <GaleryBox img={galery1} title="Waffel os beef" />
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 col-xs-6" onClick={imgzoom}>
                    <GaleryBox img={galery2} title="Beef pounds lorem" />
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 col-xs-6" onClick={imgzoom}>
                    <GaleryBox img={galery3} title="Pounds of rabbit" />
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 col-xs-6" onClick={imgzoom}>
                    <GaleryBox img={galery4} title="Chicken willow" />
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 col-xs-6" onClick={imgzoom}>
                    <GaleryBox img={galery5} title="Waffel os beef" />
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 col-xs-6" onClick={imgzoom}>
                    <GaleryBox img={galery6} title="Willow ready" />
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 col-xs-6" onClick={imgzoom}>
                    <GaleryBox img={galery7} title="Chicken soup" />
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3 col-xs-6" onClick={imgzoom}>
                    <GaleryBox img={galery8} title="Wedding" />
                </div>

            </div>
        </div>

    )
}

const Photos = () => {
    return (
        <div className="photos" id="photos">
            <img src={galery2} alt="PhotoGal" />
            <div className="xbutton" onClick={xbutton}><i class="far fa-times-circle"></i></div>
        </div>
    )
}

class About extends Component {
    render() {
        return (
            <div className="pages about" id="pages">
                <Title />
                <Aboutus />
                <Section3 />
                <Galery />
                <Photos />
                <Footer />
            </div>
        )
    }
}

export default About
