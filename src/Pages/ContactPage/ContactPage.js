import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import './ContactPage.css';


class ContactPage extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }



    render() {

        return (
            <div>
                <section className="site-section bg-light" id="contact-section">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <h2 className="text-black h1 site-section-heading">Contact Us</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7 mb-5">
                                <form action="#" className="p-5 bg-white">
                                    <h2 className="h4 text-black mb-5">Contact Form</h2>
                                    <div className="row form-group">
                                        <div className="col-md-6 mb-3 mb-md-0">
                                            <label className="text-black" htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="text-black" htmlFor="lname">Last Name</label>
                                            <input type="text" id="lname" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="email">Email</label>
                                            <input type="email" id="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="subject">Subject</label>
                                            <input type="subject" id="subject" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label className="text-black" htmlFor="message">Message</label>
                                            <textarea name="message" id="message" cols={30} rows={7} className="form-control" placeholder="Write your notes or questions here..." defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <input type="submit" defaultValue="Send Message" className="btn btn-primary btn-md text-white" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5">
                                <div className="p-4 mb-3 bg-white">
                                    <p className="mb-0 font-weight-bold">Address</p>
                                    <p className="mb-4">Happy Avenue Independence, Stann Creek District</p>
                                    <p className="mb-0 font-weight-bold">Phone</p>
                                    <p className="mb-4"><a href="#">(501)-634-5180</a></p>
                                    <p className="mb-0 font-weight-bold">Email Address</p>
                                    <p className="mb-0"><a href="#">info@devnetfalcon@gmail.com</a></p>
                                    <br />

                                    <ul className="ul-social-circle">
                                            <li><a href="#"><span className="icon-facebook" /></a></li>
                                            <li><a href="#"><span className="icon-twitter" /></a></li>
                                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                                            <li><a href="#"><span className="icon-instagram" /></a></li>
                                    </ul>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>


            </div>


        );

    }
}
export default ContactPage;