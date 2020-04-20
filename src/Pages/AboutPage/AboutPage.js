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
                            <div className = "about-content">
                            <div className = "content-1-wrapper">
                                <img src="dist/images/about_1.jpg" alt="Image" className="img-fluid rounded" />
                            </div>
                                
                                <div className = "content-2-wrapper">

                                    <div className="text-left pb-1">
                                        <h2 className="text-black h1 site-section-heading">About Us</h2>
                                    </div>
                                    <div className = "about-desc">
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt magnam corrupti, odit eos harum quaerat nostrum voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi doloribus, nemo dignissimos recusandae.</p>
                                    </div>

                                </div>

                               
                            </div>

                        </div>
                    </div>
                    <div className="site-section border-bottom" id="team-section">
                        <div className="container our-team-container">
                            <div className="header-our-team">
                                <div className="wrapper-our-team">
                                    <h2 className="text-black h1 site-section-heading">Our Team</h2>
                                </div>
                            </div>
                            <div className="content-list-wrapper">
                                <div className="team-member">
                                    <div className="person text-center">
                                        <img src="dist/images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>John Rooster</h3>
                                        <p className="position text-muted">Co-Founder, President</p>
                                        <p className="mb-4"  id = "team-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                        <ul className="ul-social-circle">
                                            <li><a href="#"><span className="icon-facebook" /></a></li>
                                            <li><a href="#"><span className="icon-twitter" /></a></li>
                                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                                            <li><a href="#"><span className="icon-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person text-center">
                                        <img src="dist/images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>John Rooster</h3>
                                        <p className="position text-muted">Co-Founder, President</p>
                                        <p className="mb-4" id = "team-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                        <ul className="ul-social-circle">
                                            <li><a href="#"><span className="icon-facebook" /></a></li>
                                            <li><a href="#"><span className="icon-twitter" /></a></li>
                                            <li><a href="#"><span className="icon-linkedin" /></a></li>
                                            <li><a href="#"><span className="icon-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="team-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person text-center">
                                        <img src="dist/images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>John Rooster</h3>
                                        <p className="position text-muted">Co-Founder, President</p>
                                        <p className="mb-4" id = "team-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
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