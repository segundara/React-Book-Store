import React from 'react';
import { faHome, faEnvelope, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
    faGoogle,
    faFacebook,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small unique-color-dark text-white" style={{backgroundColor: '#343a40'}}>

                <div style={{backgroundColor: '#6351ce'}}>
                    <div className="container">

                        <div className="row py-4 d-flex align-items-center">

                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0">Get connected with us on social networks!</h6>
                            </div>

                            <div className="col-md-6 col-lg-7 text-center text-md-right">

                                <a>
                                    <FontAwesomeIcon icon={faFacebook} className="mr-4"/>
                                </a>

                                <a>
                                    <FontAwesomeIcon icon={faTwitter} className="mr-4"/>
                                </a>

                                <a>
                                    <FontAwesomeIcon icon={faGoogle} className="mr-4"/>
                                </a>

                                <a>
                                    <FontAwesomeIcon icon={faLinkedinIn} className="mr-4"/>
                                </a>

                                <a>
                                    <FontAwesomeIcon icon={faInstagram} className="mr-4"/>
                                </a>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="container text-center text-md-left mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase font-weight-bold">Strive BookStore</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px', backgroundColor: '#6351ce'}}  />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>

                        </div>
                
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px', backgroundColor: '#6351ce'}}  />
                            <p>
                            <a href="#!">Category 1</a>
                            </p>
                            <p>
                            <a href="#!">Category 2</a>
                            </p>
                            <p>
                            <a href="#!">Category 3</a>
                            </p>
                            <p>
                            <a href="#!">Category 4</a>
                            </p>

                        </div>
                    
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px', backgroundColor: '#6351ce'}}  />
                            <p>
                            <a href="#!">Link 1</a>
                            </p>
                            <p>
                            <a href="#!">Link 2</a>
                            </p>
                            <p>
                            <a href="#!">Link 3</a>
                            </p>
                            <p>
                            <a href="#!">Link 4</a>
                            </p>

                        </div>
                    
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px', backgroundColor: '#6351ce'}} />
                            <p>
                            <FontAwesomeIcon icon={faHome} /> Fake City, Fake Country</p>
                            <p>
                            <FontAwesomeIcon icon={faEnvelope} /> strive@book.store</p>
                            <p>
                            <FontAwesomeIcon icon={faPhone} /> + 01 234 567 88</p>
                            <p>
                            <FontAwesomeIcon icon={faPrint} /> + 01 234 567 89</p>

                        </div>

                    </div>

                </div>
            
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#"> strive-BookStore.com</a>
                </div>

            </footer>
        )
    }
}

export default Footer;