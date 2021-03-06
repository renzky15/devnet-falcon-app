import React, { Component } from 'react';



class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }


    render() {

        return (
                <div>
                    <a href="#" className="bg-primary py-5 d-block">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md10"><h2 className="text-white">Let's Get Started</h2></div>
                            </div>
                        </div>
                    </a>
                    <footer className="site-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h2 className="footer-heading mb-4">LOGO</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                                        </div>
                                        <div className="col-md-3 ml-auto">
                                            <h2 className="footer-heading mb-4">Features</h2>
                                            <ul className="list-unstyled">
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Services</a></li>
                                                <li><a href="#">Testimonials</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h2 className="footer-heading mb-4">Follow Us</h2>
                                            <a href="#" className="pl-0 pr-3"><span className="icon-facebook" /></a>
                                            <a href="#" className="pl-3 pr-3"><span className="icon-twitter" /></a>
                                            <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                                            <a href="#" className="pl-3 pr-3"><span className="icon-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
                                    <form action="#" method="post">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary text-white" type="button" id="button-addon2">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row pt-3 mt-3 text-center">
                                <div className="col-md-12">
                                    <div className="border-top pt-3">
                                        <p>
                         Copyright © All rights reserved 2020 | DevNet Falcon 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
        );

    }
}
export default Footer;