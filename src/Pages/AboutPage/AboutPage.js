import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import './AboutPage.css';


class AboutPage extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }



    render() {

        return (
            
                <div>
                    <div className="site-section" id="about-section">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade">
                                    <img src="dist/images/about_1.jpg" alt="Image" className="img-fluid rounded" />
                                </div>
                                <div className="col-md-6 order-md-1" data-aos="fade">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="text-left pb-1">
                                                <h2 className="text-black h1 site-section-heading">About Us</h2>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-4">
                                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.</p>
                                        </div>
                                        <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                                            <div className="unit-4">
                                                <div className="unit-4-icon mr-4 mb-3"><span className="text-secondary icon-phonelink" /></div>
                                                <div>
                                                    <h3>Web &amp; Mobile Specialties</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
                                                    <p className="mb-0"><a href="#">Learn More</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
                                            <div className="unit-4">
                                                <div className="unit-4-icon mr-4 mb-3"><span className="text-secondary icon-extension" /></div>
                                                <div>
                                                    <h3>Intuitive Thinkers</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
                                                    <p className="mb-0"><a href="#">Learn More</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section border-bottom" id="team-section">
                        <div className="container">
                            <div className="row justify-content-center mb-5">
                                <div className="col-md-7 text-center">
                                    <h2 className="text-black h1 site-section-heading">Our Team</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={100}>
                                    <div className="person text-center">
                                        <img src="dist/images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>John Rooster</h3>
                                        <p className="position text-muted">Co-Founder, President</p>
                                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                        <ul className="ul-social-circle">
                                            <li><a href="#"><span className="icon-facebook" /></a></li>
                                            <li><a href="#"><span className="icon-twitter" /></a></li>
                                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                                            <li><a href="#"><span className="icon-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={200}>
                                    <div className="person text-center">
                                        <img src="dist/images/person_3.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>Tom Sharp</h3>
                                        <p className="position text-muted">Co-Founder, COO</p>
                                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                        <ul className="ul-social-circle">
                                            <li><a href="#"><span className="icon-facebook" /></a></li>
                                            <li><a href="#"><span className="icon-twitter" /></a></li>
                                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                                            <li><a href="#"><span className="icon-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay={300}>
                                    <div className="person text-center">
                                        <img src="dist/images/person_4.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>Winston Hodson</h3>
                                        <p className="position text-muted">Marketing</p>
                                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
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
                    </div>
                </div>

        );

    }
}
export default AboutPage;