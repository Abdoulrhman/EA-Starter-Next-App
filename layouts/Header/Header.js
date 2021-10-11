import React, { useRef, useState } from 'react'
import MobileMenu from '../MobileMenu/MobileMenu';
import Link from 'next/link'


function Header() {
    const megaMenuRef= useRef(null)
    const [isMobileMenuOpen, setMobileMenuStatus] = useState(false)
    const hanldeMobileMenu = () => {
        setMobileMenuStatus(true)
        if(megaMenuRef.current) {
            megaMenuRef.current.classList.remove('open')
            megaMenuRef.current.addEventListener('webkitTransitionEnd', function() {
                setMobileMenuStatus(false)
            })
        }
    }

    
    return (
        <>
            <header className="header-contain">
                <div className="header-top">
                    <div className="header-lang">
                        <ul>
                            <li className="active">English</li>
                            <li>Arabic</li>
                        </ul>
                    </div>
                    <div className="header-meta">
                        <ul>
                            <li>
                                <div className="icon-wrap">
                                    <img src='/assets/icons/home.png' alt="image" />
                                    <span>
                                        Call us anytime
                                        <i>(+971) 600 545454</i>
                                    </span>
                                </div>
                            </li>

                            <li>
                                <div className="icon-wrap">
                                    <img src='/assets/icons/home.png' alt="image" />
                                    <span>
                                    Visit our office
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-bot">
                    <div className="header-nav">
                        <div className="header-nav-item logo">
                            <img src='assets/icons/logo.png' alt="image" />
                        </div>
                        <div 
                            className={`header-nav-item mobile-menu-key ${isMobileMenuOpen ? 'change' : ''}`} 
                            onClick={hanldeMobileMenu}
                        >
                            <div className="mobile-menu-key-line"></div>
                            <div className="mobile-menu-key-line"></div>
                            <div className="mobile-menu-key-line"></div>
                        </div>
                        <div className="header-nav-item main-nav">
                            <nav>
                                <ul>
                                    <li className="active">Home</li>
                                    <li>Auctions</li>
                                    <li>FAQs</li>
                                    <li>Contact Us</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="header-search-login">
                        <div className="header-login">
                            <div className="header-not-login-data">
                                <div className="join-btn">Join Free</div>
                                <div className="login-btn">
                                    <Link href="/login">Login</Link>
                                </div>
                            </div>
                            <div className="header-login-data">
                                <ul>
                                    <li>
                                        <div className="cart-wrap">
                                            <img src='assets/icons/shopping-cart.png' alt="cart" />
                                            <span className="label-numb">8</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bids-wrap">
                                            <img src="assets/icons/order.png" alt="bid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="likes-wrap">
                                            <img src='assets/icons/heart.png' alt="heart" />
                                            <span className="label-numb">3</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="user-img size-sm">
                                            <img src='assets/icons/profile-img-enhance.jpg' alt="username" />
                                        </div>
                                        <div className="user-dropdown-wrap">
                                            <div className="user-dropdown-list">
                                                <div className="user-dropdown-item">
                                                    <div className="icon-wrap">
                                                        <img src='/assets/icons/home.png' alt="image" />
                                                        <span>View Profile</span>
                                                    </div>
                                                </div>
                                                <div className="user-dropdown-item">
                                                    <div className="icon-wrap">
                                                        <img src='/assets/icons/home.png' alt="image" />
                                                        <span>View Auctions</span>
                                                    </div>
                                                </div>
                                                <div className="user-dropdown-item">
                                                    <div className="icon-wrap">
                                                        <img src='/assets/icons/home.png' alt="image" />
                                                        <span>Logout</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-search-form">
                            <p>FORM</p>
                        </div>
                        <div className="header-search-key">
                            <img src='assets/icons/search-white.png' alt="image" />
                        </div>
                    </div>
                </div>
            </header>

            {
                isMobileMenuOpen
                ?   <MobileMenu 
                        megaMenuRef={megaMenuRef} 
                    />
                :   null
            }
            
        </>
    )
}

export default Header
