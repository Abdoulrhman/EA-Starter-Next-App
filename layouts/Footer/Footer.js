import React from 'react'


function Footer() {
    return (
        <footer className="footer-contain">
            <div className="footer-top">
                <div className="footer-subscribe-wrap">
                    <form>
                        <div className="input-wrap">
                            <input type="text" className="subscribe-input" placeholder="Enter your email address." />
                        </div>
                        <button className="subscribe-btn">Subscribe</button>
                    </form>
                </div>
                <div className="footer-auth-wrap">
                    <ul>
                        <li>
                            <img src='/assets/icons/norton.png' alt="" />
                        </li>
                        <li>
                            <img src='/assets/icons/secure-payment.png' alt="" />
                        </li>
                        <li>
                            <img src='/assets/icons/trustwave.png' alt="" />
                        </li>
                    </ul>
                </div>
            </div>
            
            
            
            <div className="footer-mid">
                <div className="footer-items-wrap">
                    <div className="footer-item-col have-title">
                        <strong>Auctions</strong>
                        <ul>
                            <li>Abu Dhabi Number Plates</li>
                            <li>Sharjah Number Plates</li>
                            <li> Dubai Number Plates </li>
                            <li>RAK Number Plates</li>
                            <li>Ajman Number Plates</li>
                        </ul>
                    </div>
                    <div className="footer-item-col">
                        <strong>Auctions</strong>
                        <ul>
                            <li>Vehicles </li>
                            <li>Machinery</li>
                            <li> Dubai Property </li>
                            <li>Abu Dhabi Property</li>
                            <li>Etisalat VIP Plans</li>
                        </ul>
                    </div>
                    <div className="footer-item-col have-title">
                        <strong>The Company</strong>
                        <ul>
                            <li>About Emirates Auction </li>
                            <li>How we started</li>
                            <li> Dubai Number Plates </li>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer-item-col">
                        <div className="footer-logo">
                            <img src='/assets/icons/logo-trans.png' alt="Emirates Autctions" />
                        </div>
                        <div className="footer-social">
                            <ul>
                                <li>
                                    <img src='/assets/icons/facebook-footer.png' alt="facebook" />
                                </li>
                                <li>
                                    <img src='/assets/icons/twitter-footer.png' alt="Twitter" />
                                </li>
                                <li>
                                    <img src='/assets/icons/facebook-footer.png' alt="facebook" />
                                </li>
                                <li>
                                    <img src='/assets/icons/twitter-footer.png' alt="Twitter" />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bot">
                <p>2018 © Emirates Auction LLC</p>
            </div>
        </footer>
    )
}

export default Footer
