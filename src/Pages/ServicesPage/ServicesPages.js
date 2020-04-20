import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import './ServicesPage.css';


class ServicesPage extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }



    render() {

        return (
            <div>
                <section className="site-section border-bottom" id="services-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-8 text-center" data-aos="fade-up">
                                <h2 className="text-black h1 site-section-heading text-center">Our Services</h2>
                            </div>
                        </div>
                        <div className="row align-items-stretch">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary icon-laptop2" /></div>
                                    <div>
                                        <h3>Web Design</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay={200}>
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary icon-question_answer" /></div>
                                    <div>
                                        <h3>Web Applications</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay={500}>
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span className="text-primary icon-phonelink" /></div>
                                    <div>
                                        <h3>Maintenance & Support</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>


        );

    }
}
export default ServicesPage;