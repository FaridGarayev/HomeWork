import React, { Component } from 'react'
import emailjs from 'emailjs-com';

import Footer from './Footer'


const ContactContainer = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_gj9720g', 'template_9nfiutn', e.target, 'user_HdRqMNVzSD0GKwQsKe3Hi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <div className="divleft">
                        <h1>Contact <br /> Us</h1>
                        <h6>Reservation or Information? Write to us!</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quasi reiciendis ea quis id odit doloribus voluptates illo, eum, provident necessitatibus hic tenetur harum vero?</p>

                        <div className="contacts">
                            <div className="contact1">
                                <div className="row">
                                    <div className="col-lg-3 col-md-2 col-sm-2">
                                        <i class="fas fa-map-marked-alt"></i>
                                    </div>
                                    <div className="col-lg-9 col-md-10 col-sm-10">
                                        <h5>Adress</h5>
                                        <p>46 St James's PI, Baku</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact1">
                                <div className="row">
                                    <div className="col-lg-3 col-md-2 col-sm-2">
                                        <i class="fas fa-phone"></i>
                                    </div>
                                    <div className="col-lg-9 col-md-10 col-sm-10">
                                        <h5>Phone</h5>
                                        <p>+994516443264</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact1">
                                <div className="row">
                                    <div className="col-lg-3 col-md-2 col-sm-2">
                                        <i class="far fa-envelope"></i>
                                    </div>
                                    <div className="col-lg-9 col-md-10 col-sm-10">
                                        <h5>Email</h5>
                                        <p>black@bug.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-sm-12 col-md-12 col-lg-7">
                    <div className="divright">
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6 col-sm-12 input_label">
                                    <label for="basic-url" class="form-label">Your Name</label> <br />
                                    <input type="text" name="user_name" />
                                </div>
                                <div className="col-md-6 col-sm-12 input_label">
                                    <label for="basic-url" class="form-label">Your Email</label> <br />
                                    <input type="email" name="user_email" />
                                </div>
                                <div className="col-md-6 col-sm-12 input_label">
                                    <label for="basic-url" class="form-label">Phone Number</label> <br />
                                    <input type="phone" name="phone_num" />
                                </div>
                                <textarea name="message" placeholder="Type..."></textarea>
                                <input className="sendbutton" type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


class ContactUs extends Component {
    render() {
        return (
            <div className="pages contactus">
                <ContactContainer />
                <Footer />
            </div>
        )
    }
}

export default ContactUs
