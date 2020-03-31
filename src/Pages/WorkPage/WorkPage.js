import React, { Component } from 'react';
import './WorkPage.css';


class WorkPage extends Component {

    constructor(props) {
        super(props);

        this.state = {


        }
    }



    render() {

        return (
            <div>
                <section className="site-section" id="work-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-8 text-center">
                                <h2 className="text-black h1 site-section-heading text-center">Our Works</h2>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, itaque neque, delectus odio iure explicabo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_1.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_1.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Bonzai Tree</h2>
                                        <span className="category">Web Application</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_2.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_2.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Simple Woman</h2>
                                        <span className="category">Branding</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_3.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_3.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Fruits</h2>
                                        <span className="category">Website</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_4.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_4.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Design Material</h2>
                                        <span className="category">Web Application</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_5.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_5.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Handy Food</h2>
                                        <span className="category">Branding</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_6.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_6.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Cat With Cup</h2>
                                        <span className="category">Website</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* feature 1 */}

                
                    <section className="section ft-feature-1">
                        <div className="container">
                            <div className="row align-items-stretch">
                                <div className="col-12 bg-black w-100 ft-feature-1-content">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5">
                                            <img src="dist/images/about_1.jpg" alt="Image" className="img-fluid mb-4 mb-lg-0" />
                                        </div>
                                        <div className="col-lg-3 ml-auto">
                                            <div className="mb-5">
                                                <h3 className="d-flex align-items-center"><span className="icon icon-beach_access mr-2" /><span>Strategy</span></h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                            <div>
                                                <h3 className="d-flex align-items-center"><span className="icon icon-build mr-2" /><span>Web Development</span></h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="mb-5">
                                                <h3 className="d-flex align-items-center"><span className="icon icon-format_paint mr-2" /><span>Art Direction</span></h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                            <div>
                                                <h3 className="d-flex align-items-center"><span className="icon icon-question_answer mr-2" /><span>Copywriting</span></h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.</p>
                                                <p><a href="#">Read More</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* testimonials */}

                    <section className="site-section testimonial-wrap">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 text-center">
                                    <h2 className="text-black h1 site-section-heading text-center">Testimonials</h2>
                                </div>
                            </div>
                        </div>
                        <div className="slide-one-item home-slider owl-carousel">
                            <div>
                                <div className="testimonial">
                                    <blockquote className="mb-5">
                                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                                    </blockquote>
                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                        <div><img src="dist/images/person_3.jpg" alt="Image" className="w-50 img-fluid mb-3" /></div>
                                        <p>John Smith</p>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial">
                                    <blockquote className="mb-5">
                                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                                    </blockquote>
                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                        <div><img src="dist/images/person_2.jpg" alt="Image" className="w-50 img-fluid mb-3" /></div>
                                        <p>Christine Aguilar</p>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial">
                                    <blockquote className="mb-5">
                                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                                    </blockquote>
                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                        <div><img src="dist/images/person_4.jpg" alt="Image" className="w-50 img-fluid mb-3" /></div>
                                        <p>Robert Spears</p>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial">
                                    <blockquote className="mb-5">
                                        <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                                    </blockquote>
                                    <figure className="mb-4 d-flex align-items-center justify-content-center">
                                        <div><img src="dist/images/person_5.jpg" alt="Image" className="w-50 img-fluid mb-3" /></div>
                                        <p>Bruce Rogers</p>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>

            </div>

        );

    }
}
export default WorkPage;