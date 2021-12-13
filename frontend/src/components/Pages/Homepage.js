import React from "react";
//import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Homepage = () => {
  //const history = useHistory();
  // const navigate = () => {
  //   history.push("/about");
  // };
  return (
    <div>
      <div>
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xl-7">
                <div className="block">
                  <div className="divider mb-3" />
                  <span className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                  <h1 className="mb-3 mt-3">Your most trusted health partner</h1>
                  <p className="mb-4 pr-5">A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                  <div className="btn-container ">
                    <Link to="/appointment" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment <i className="icofont-simple-right ml-2  " /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="feature-block d-lg-flex">
                  <div className="feature-item mb-5 mb-lg-0">
                    <div className="feature-icon mb-4">
                      <i className="icofont-surgeon-alt" />
                    </div>
                    <span>24 Hours Service</span>
                    <h4 className="mb-3">Online Appoinment</h4>
                    <p className="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                    <Link to="/appointment" className="btn btn-main btn-round-full">Make a appoinment</Link>
                  </div>
                  <div className="feature-item mb-5 mb-lg-0">
                    <div className="feature-icon mb-4">
                      <i className="icofont-ui-clock" />
                    </div>
                    <span>Timing schedule</span>
                    <h4 className="mb-3">Working Hours</h4>
                    <ul className="w-hours list-unstyled">
                      <li className="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
                      <li className="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
                      <li className="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
                    </ul>
                  </div>
                  <div className="feature-item mb-5 mb-lg-0">
                    <div className="feature-icon mb-4">
                      <i className="icofont-support" />
                    </div>
                    <span>Emegency Cases</span>
                    <h4 className="mb-3">+91-9644705777</h4>
                    <p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-sm-6">
                <div className="about-img">
                  <img src="images/about/img-1.jpg" alt="" className="img-fluid" />
                  <img src="images/about/img-2.jpg" alt="" className="img-fluid mt-4" />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="about-img mt-4 mt-lg-0">
                  <img src="images/about/img-3.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-content pl-4 mt-4 mt-lg-0">
                  <h2 className="title-color">Personal care <br />&amp; healthy living</h2>
                  <p className="mt-4 mb-5">We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
                  <Link to="/services" className="btn btn-main-2 btn-round-full btn-icon">Services<i className="icofont-simple-right ml-3" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="cta-section ">
          <div className="container">
            <div className="cta position-relative">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-stat">
                    <i className="icofont-doctor" />
                    <span className="h3">58</span>k
                    <p>Happy People</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-stat">
                    <i className="icofont-flag" />
                    <span className="h3">700</span>+
                    <p>Surgery Comepleted</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-stat">
                    <i className="icofont-badge" />
                    <span className="h3">40</span>+
                    <p>Expert Doctors</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="counter-stat">
                    <i className="icofont-globe" />
                    <span className="h3">20</span>
                    <p>Worldwide Branch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="section service gray-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <h2>Award winning patient care</h2>
                  <div className="divider mx-auto my-4" />
                  <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-laboratory text-lg" />
                    <h4 className="mt-3 mb-3">Laboratory services</h4>
                  </div>
                  <div className="content">
                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-heart-beat-alt text-lg" />
                    <h4 className="mt-3 mb-3">Heart Disease</h4>
                  </div>
                  <div className="content">
                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-tooth text-lg" />
                    <h4 className="mt-3 mb-3">Dental Care</h4>
                  </div>
                  <div className="content">
                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-crutch text-lg" />
                    <h4 className="mt-3 mb-3">Body Surgery</h4>
                  </div>
                  <div className="content">
                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-brain-alt text-lg" />
                    <h4 className="mt-3 mb-3">Neurology Sargery</h4>
                  </div>
                  <div className="content">
                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-4">
                  <div className="icon d-flex align-items-center">
                    <i className="icofont-dna-alt-1 text-lg" />
                    <h4 className="mt-3 mb-3">Gynecology</h4>
                  </div>
                  <div className="content">
                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="section appoinment">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 ">
                <div className="appoinment-content">
                  <img src="images/about/img-3.jpg" alt="" className="img-fluid" />
                  <div className="emergency">
                    <h2 className="text-lg"><i className="icofont-phone-circle text-lg" />+919644705777</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10 ">
                <div className="appoinment-wrap mt-5 mt-lg-0">
                  <h2 className="mb-2 title-color">Book appoinment</h2>
                  <p className="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                  <form id="#" className="appoinment-form" method="post" action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select className="form-control" id="exampleFormControlSelect1">
                            <option>Choose Department</option>
                            <option>Software Design</option>
                            <option>Development cycle</option>
                            <option>Software Development</option>
                            <option>Maintenance</option>
                            <option>Process Query</option>
                            <option>Cost and Duration</option>
                            <option>Modal Delivery</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <select className="form-control" id="exampleFormControlSelect2">
                            <option>Select Doctors</option>
                            <option>Software Design</option>
                            <option>Development cycle</option>
                            <option>Software Development</option>
                            <option>Maintenance</option>
                            <option>Process Query</option>
                            <option>Cost and Duration</option>
                            <option>Modal Delivery</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input name="time" id="time" type="text" className="form-control" placeholder="Time" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input name="name" id="name" type="text" className="form-control" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group-2 mb-4">
                      <textarea name="message" id="message" className="form-control" rows={6} placeholder="Your Message" defaultValue={""} />
                    </div>
                    <Link className="btn btn-main btn-round-full" to="/appointment">Make Appoinment <i className="icofont-simple-right ml-2  " /></Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section testimonial-2 gray-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center">
                  <h2>We served over 5000+ Patients</h2>
                  <div className="divider mx-auto my-4" />
                  <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 testimonial-wrap-2">
                <div className="testimonial-block style-2  gray-bg">
                  <i className="icofont-quote-right" />
                  <div className="testimonial-thumb">
                    <img src="images/team/test-thumb1.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="client-info ">
                    <h4>Amazing service!</h4>
                    <span>John Partho</span>
                    <p>
                      They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                    </p>
                  </div>
                </div>
                <div className="testimonial-block style-2  gray-bg">
                  <div className="testimonial-thumb">
                    <img src="images/team/test-thumb2.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="client-info">
                    <h4>Expert doctors!</h4>
                    <span>Mullar Sarth</span>
                    <p>
                      They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                    </p>
                  </div>
                  <i className="icofont-quote-right" />
                </div>
                {/* <div className="testimonial-block style-2  gray-bg">
                  <div className="testimonial-thumb">
                    <img src="images/team/test-thumb3.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="client-info">
                    <h4>Good Support!</h4>
                    <span>Kolis Mullar</span>
                    <p>
                      They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                    </p>
                  </div>
                  <i className="icofont-quote-right" />
                </div> */}
                {/* <div className="testimonial-block style-2  gray-bg">
                  <div className="testimonial-thumb">
                    <img src="images/team/test-thumb4.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="client-info">
                    <h4>Nice Environment!</h4>
                    <span>Partho Sarothi</span>
                    <p className="mt-4">
                      They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                    </p>
                  </div>
                  <i className="icofont-quote-right" />
                </div> */}
                {/* <div className="testimonial-block style-2  gray-bg">
                  <div className="testimonial-thumb">
                    <img src="images/team/test-thumb1.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="client-info">
                    <h4>Modern Service!</h4>
                    <span>Kolis Mullar</span>
                    <p>
                      They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.
                    </p>
                  </div>
                  <i className="icofont-quote-right" />
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section clients">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center">
                  <h2>Partners who support us</h2>
                  <div className="divider mx-auto my-4" />
                  <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row clients-logo">
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/1.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/2.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/3.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/4.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/5.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/6.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/3.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/4.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/5.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="client-thumb">
                  <img src="images/about/6.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      {/* testimonial */}
    </div>
  );
};

export default Homepage;
