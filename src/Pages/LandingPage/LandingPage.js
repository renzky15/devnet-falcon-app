import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import './LandingPage.css';


class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }



    render() {

        return (
            <div>
                    <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url(dist/images/hero_1.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-md-12" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="row justify-content-center mb-4">
                                        <div className="col-md-8 text-center">
                                            <h1>We Love To Build <span className="typed-words"/></h1>
                                            <p className="lead mb-5">Lorem ipsum dolor sit amet consectetur <a href="#" target="_blank">adipisicing elit.</a></p>
                                            <div><a data-fancybox data-ratio={2} href="https://vimeo.com/317571768" className="btn btn-primary btn-md">Contact Us Now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="site-section">
                        <div className="container">
                            <div className = "section-wrapper">
                                <div className = "p-content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.
                                    </p>
                                </div>

                                <div className = "list-content">
                                    <ul className="list-unstyled ul-check primary">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li>
                                    </ul>

                                    <ul className="list-unstyled ul-check primary">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>


        );

    }
}
export default LandingPage;