import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pngaaa from '../img/pngaaa.png'
import aboutus from '../img/aboutus.jpg'
import specialoffer1 from '../img/specialoffer1.jpg'
import specialoffer2 from '../img/specialoffer2.jpeg'
import specialoffer3 from '../img/specialoffer3.jpg'
import cartimg1 from '../img/receiptsweet.jpg'
import cartimg2 from '../img/receiptburger.jpg'
import cartimg3 from '../img/receiptdrinks.jpg'
import cartimg4 from '../img/receiptpizzas.jpg'
import Footer from './Footer'

import $ from 'jquery'
$(document).ready(function () {
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 300) {
            $(".carts").addClass('cartsanimate');
        } else $(".carts").removeClass('cartsanimate');
        if (top >= 1500) {
            $(".specialofferhome").addClass('specialofferhomeanimate');
        } else $(".specialofferhome").removeClass('specialofferhomeanimate');
    });
});


const Title = () => {
    return (
        <div className="titlehome">
            <h5>Your Place for delicious food</h5>
            <div className="titlepages">
                <span></span>
                <h1> Panky </h1>
                <span></span>
            </div>
            <img src={pngaaa} alt="" />
        </div>
    )
}

const Aboutus = () => {
    return (
        <div className="aboutushome">
            <div className="row">

                <div className="col-lg-6 col-md-12">
                    <div className="images">
                        <div className="image1">
                            <img className="img1" src={aboutus} alt="" />
                        </div>
                    </div>

                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="textabout">
                        <h5>Cozy & Quiet</h5>
                        <div className="titlepages">
                            <span></span>
                            <h1> About Us </h1>
                            <span></span>
                        </div>

                        <p>
                            Tart croissant bonbon bear claw. Pie gummi bears gingerbread caramels powder croissant fruitcake.
                            Chocolate bar topping toffee candy canes donut brownie icing. Danish marzipan chocolate marzipan oat cake
                            tootsie roll pie. Chupa chups tiramisu candy candy. Lollipop chupa chups bonbon.
                        </p>
                        <Link to="/About" ><button><i class="fas fa-concierge-bell"></i> About Us</button></Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

const SpecialImg = (props) => {
    return (
        <Link to="/Receipts" className="alink" >
            <div className="specialimg1">
                <img src={props.img} alt="" />
                <div className="speciealimgtext">
                    <h5>{props.h5title}</h5>
                    <h6>{props.h6title}</h6>
                    <p>{props.ptitle}</p>
                </div>
            </div>
        </Link>
    )
}

const Specialoffers = () => {
    return (
        <div className="specialofferhome">
            <div className="specialtext">
                <h5>Something for Everyone</h5>
                <div className="titlepages">
                    <span></span>
                    <h1> Special Offers </h1>
                    <span></span>
                </div>
            </div>

            <div className="specialimg">
                <div className="row">
                    <div className="col-lg-4">
                        <SpecialImg img={specialoffer1} h5title="Lunch Menu" h6title="every tuesday & friday" ptitle="Paneer caerphilly cheese strings. Manchego rubber cheese danish fontina cheesecake when the cheese comes out everybody's happy monterey jack halloumi boursin. Cheese strings cow parmesan rubber cheese boursin goat caerphilly macaroni cheese." />
                    </div>
                    <div className="col-lg-4">
                        <SpecialImg img={specialoffer2} h5title="Bonus Dessert" h6title="buy two get three" ptitle="Cheese on toast caerphilly jarlsberg. Pecorino dolcelatte mascarpone red leicester blue castello cheese and wine cheese triangles cheese and biscuits. Everyone loves bavarian bergkase fondue bishop." />
                    </div>
                    <div className="col-lg-4">
                        <SpecialImg img={specialoffer3} h5title="Wine tasting" h6title="every sunday" ptitle="Cheese slices cottage cheese chalk and cheese. Melted cheese cheese strings mascarpone when the cheese comes out everybody's happy airedale camembert de normandie cheesecake mascarpone." />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ReceiptCart = (props) => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="carts">
                <h3 className="cartitle">{props.title}</h3>
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}

const Receipt = () => {
    return (
        <div className="receipthome">

            <h5>Delicious & Easy</h5>
            <div className="titlepages">
                <span></span>
                <h1> Recipes By Category </h1>
                <span></span>
            </div>

            <div className="cartcontainer">
                <div className="row">
                    <ReceiptCart title="Sweets" img={cartimg1} />
                    <ReceiptCart title="Burgers" img={cartimg2} />
                    <ReceiptCart title="Drinks" img={cartimg3} />
                    <ReceiptCart title="Pizzas" img={cartimg4} />
                </div>
            </div>
        </div>
    )
}

class Home extends Component {
    render() {
        return (
            <div className="pages home">
                <Title />
                <Receipt />
                <Aboutus />
                <Specialoffers />
                <Footer />
            </div>
        )
    }
}

export default Home
