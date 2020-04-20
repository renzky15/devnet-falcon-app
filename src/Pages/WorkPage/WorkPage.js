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
                                        <h2>Project #1</h2>
                                        <span className="category">Web Application</span>
                                        
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_2.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_2.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #2</h2>
                                        <span className="category">Web Design</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_3.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_3.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #3</h2>
                                        <span className="category">Website</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_4.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_4.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #4</h2>
                                        <span className="category">Web Application</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_5.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_5.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #5</h2>
                                        <span className="category">Web Design</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <a href="dist/images/img_6.jpg" className="media-1" data-fancybox="gallery">
                                    <img src="dist/images/img_6.jpg" alt="Image" className="img-fluid" />
                                    <div className="media-1-content">
                                        <h2>Project #6</h2>
                                        <span className="category">Website</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Process 1 */}

                <div className="site-section border-bottom" id="process-section">
                        <div className="container our-process-container">
                            <div className="header-our-process">
                                <div className="wrapper-our-process">
                                    <h2 className="text-black h1 site-section-heading">Our Process</h2>
                                </div>
                            </div>
                            <div className="desc-our-process">
                                <div className="wrapper-our-process">
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.
                                    </p>
                                </div>
                            </div>
                            <div className="content-list-wrapper">
                                <div className="process-member">
                                    <div className="person text-center">
                                        <img src="dist/images/maintenance-icon.png" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>PLAN</h3>
                                        <p className="mb-4"  id = "process-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                        
                                    </div>
                                </div>

                                <div className="process-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person text-center">
                                        <img src="dist/images/maintenance-icon.png" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>DESIGN</h3>
                                        
                                        <p className="mb-4" id = "process-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                        
                                    </div>
                                </div>

                                <div className="process-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person text-center">
                                        <img src="dist/images/maintenance-icon.png" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>DEVELOP</h3>
                                        
                                        <p className="mb-4" id = "process-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                        
                                    </div>
                                </div>
                                <div className="process-member" data-aos="fade" data-aos-delay={100}>
                                    <div className="person text-center">
                                        <img src="dist/images/maintenance-icon.png" alt="Image" className="img-fluid rounded-circle w-50 mb-5" />
                                        <h3>LAUNCH</h3>
                                        
                                        <p className="mb-4" id = "process-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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