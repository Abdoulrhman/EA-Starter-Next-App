import React, { useEffect } from 'react'
import ProfileImg from '../../public/assets/icons/profile-img-enhance.jpg';
import HomeIcon from '../../public/assets/icons/home.png';
import PhoneIcon from '../../public/assets/icons/down-arrow.png';
// import $ from "jquery";

function MobileMenu({megaMenuRef}) {
    useEffect(() => {
        setTimeout(() => {
            megaMenuRef.current.classList.add('open')
        }, 50)

    }, [])

    const hanldeNested = (e) => {
        // $(e.target).next().slideToggle()
        // $(e.target).toggleClass('active')
    }

    return (
        <div className="megamenu-contain" ref={megaMenuRef}>
            <div className="megamenu-wrap">
                <div className="megamenu-body">
                    <div className="megamenu-body-head">
                        <div className="megamenu-user">
                            <div className="user-img size-md">
                                <img src='assets/icons/profile-img-enhance.jpg' alt="username" />
                            </div>
                            <div className="megamenu-user-data">
                                <ul>
                                    <li>
                                        <span>Username</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="megamenu-data-list">
                        <ul>
                            <li className="active">
                                <div className="icon-wrap">
                                    <img src='assets/icons/home.png' alt="icon" />
                                    <span>Home</span>
                                </div>
                            </li>
                            <li>
                                <div className="have-nested">
                                    <div className="nested-head" onClick={hanldeNested}>
                                        <div className="icon-wrap">
                                            <img src='assets/icons/home.png' alt="icon" />
                                            <span>Auctions</span>
                                        </div>
                                        <img className="dropdown-icon" src='assets/icons/down-arrow.png' alt="icon" />
                                    </div>
                                    <div className="nested-body">
                                        <div className="nested-body-items-wrap">
                                            <div className="nested-body-item">
                                                <span>Vehicles auctions</span>
                                            </div>
                                            <div className="nested-body-item">
                                                <span>Prop auctions</span>
                                            </div>
                                            <div className="nested-body-item">
                                                <span>Other auctions</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </li>
                            <li>
                                <div className="icon-wrap">
                                    <img src='assets/icons/home.png' alt="icon" />
                                    <span>About</span>
                                </div>
                            </li>
                            <li>
                                <div className="icon-wrap">
                                    <img src='assets/icons/home.png' alt="icon" />
                                    <span>FAQs</span>
                                </div>
                            </li>
                            <li>
                                <div className="icon-wrap">
                                    <img src='assets/icons/home.png' alt="icon" />
                                    <span>Contact us</span>
                                </div>
                            </li>
                            <li>
                                <div className="have-nested">
                                    <div className="nested-head" onClick={hanldeNested}>
                                        <div className="icon-wrap">
                                            <img src='assets/icons/home.png' alt="icon" />
                                            <span>Language</span>
                                        </div>
                                        <img className="dropdown-icon" src='assets/icons/down-arrow.png' alt="icon" />
                                    </div>
                                    <div className="nested-body">
                                        <div className="nested-body-items-wrap">
                                            <div className="nested-body-item">
                                                <span>English</span>
                                            </div>
                                            <div className="nested-body-item">
                                                <span>Arabic</span>
                                            </div>
                                        </div>
                                    </div>
                                        
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileMenu
