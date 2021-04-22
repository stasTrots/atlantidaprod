import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="row row-md">
                    <div className="col-xs-4 col-sm-12 col-md-12">
                        <div className="footer-info">
                            <div className="footer-logo">
                                <img src="/image/logo.png" alt="" />
                                <h2 className="logo-text">atlantida</h2>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                                elit. Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. className aptent taciti 
                                sociosqu ad litora torquent per conubia nostra.</p>
                                <h3>atlantida studio</h3>
                                <p>Steven Bernson, Attorney at Law 
                                    1556 Broadway, suite 416 
                                    New York, NY, 10120, USA </p>
                                <h3>e-mail: elegantflyers@gmail.com</h3>
                                <h3>+380954915573</h3>
                                <div className="mereji">
                                    <img src="/image/icon_foot_1.png" alt="" className="meregi-img" />
                                    <img src="/image/icon_foot_2.png" alt="" className="meregi-img" />
                                    <img src="/image/icon_foot_4.png" alt="" className="meregi-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-12 col-md-12">
                        <form action="" className="form-cont">
                            <input type="text"  placeholder="Name*" />
                            <input type="text"  placeholder="E-mail*" />
                            <input type="text"  placeholder="Telephone*" />
                            <input type="text"  placeholder="Website" />
                            <textarea  placeholder="Message*"></textarea>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container copy-text">
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div>
                            <p>Copyright © 2021 Atlantida Theme</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer