// Header.js
import React, { useState } from 'react';
import './Header.css'; // Assuming we're using CSS for styles
import { Link } from 'react-router-dom';
const Header = ({ showRegister }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">Logo</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="contact-support">
                    <div className='support-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M21.187 19.7309C21.187 20.0909 21.107 20.4609 20.937 20.8209C20.767 21.1809 20.547 21.5209 20.257 21.8409C19.767 22.3809 19.227 22.7709 18.6169 23.0209C18.0169 23.271 17.3669 23.401 16.6669 23.401C15.6469 23.401 14.5569 23.161 13.4069 22.6709C12.2568 22.1809 11.1068 21.5209 9.9668 20.6909C8.81678 19.8509 7.72676 18.9209 6.68674 17.8909C5.65672 16.8508 4.72671 15.7608 3.89669 14.6208C3.07668 13.4808 2.41667 12.3408 1.93666 11.2107C1.45665 10.0707 1.21664 8.9807 1.21664 7.94068C1.21664 7.26067 1.33665 6.61066 1.57665 6.01065C1.81665 5.40064 2.19666 4.84063 2.72667 4.34062C3.36668 3.71061 4.06669 3.4006 4.80671 3.4006C5.08671 3.4006 5.36672 3.46061 5.61672 3.58061C5.87673 3.70061 6.10673 3.88061 6.28673 4.14062L8.60677 7.41067C8.78678 7.66068 8.91678 7.89068 9.00678 8.11069C9.09678 8.32069 9.14678 8.53069 9.14678 8.7207C9.14678 8.9607 9.07678 9.20071 8.93678 9.43071C8.80678 9.66071 8.61677 9.90072 8.37677 10.1407L7.61676 10.9307C7.50675 11.0407 7.45675 11.1707 7.45675 11.3307C7.45675 11.4107 7.46675 11.4807 7.48675 11.5607C7.51676 11.6407 7.54676 11.7007 7.56676 11.7608C7.74676 12.0908 8.05676 12.5208 8.49677 13.0408C8.94678 13.5608 9.42679 14.0908 9.9468 14.6208C10.4868 15.1508 11.0068 15.6408 11.5368 16.0908C12.0568 16.5308 12.4868 16.8308 12.8268 17.0108C12.8768 17.0308 12.9368 17.0608 13.0069 17.0908C13.0869 17.1208 13.1669 17.1308 13.2569 17.1308C13.4269 17.1308 13.5569 17.0708 13.6669 16.9608L14.4269 16.2108C14.6769 15.9608 14.9169 15.7708 15.1469 15.6508C15.3769 15.5108 15.6069 15.4408 15.8569 15.4408C16.0469 15.4408 16.2469 15.4808 16.4669 15.5708C16.6869 15.6608 16.9169 15.7908 17.1669 15.9608L20.477 18.3109C20.737 18.4909 20.917 18.7009 21.027 18.9509C21.127 19.2009 21.187 19.4509 21.187 19.7309Z" stroke="#FF5F2D" stroke-width="1.44003" stroke-miterlimit="10" />
                            <path d="M17.717 10.4008C17.717 9.80081 17.247 8.88079 16.547 8.13078C15.907 7.44077 15.057 6.90076 14.2169 6.90076" stroke="#FF5F2D" stroke-width="1.44003" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.2171 10.4007C21.2171 6.53066 18.087 3.4006 14.2169 3.4006" stroke="#FF5F2D" stroke-width="1.44003" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='contact-text'>
                        <div className='text1'>Have a question?</div>
                        <div className='text2'>Contact Support</div>
                    </div>
                </div>
                <div className="user-profile">
                    {showRegister ? (
                        <div className="register-btn">Register/Login</div>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M18.6177 8.70074C18.6177 7.10945 17.9855 5.58332 16.8603 4.4581C15.7351 3.33289 14.209 2.70074 12.6177 2.70074C11.0264 2.70074 9.50025 3.33289 8.37504 4.4581C7.24982 5.58332 6.61768 7.10945 6.61768 8.70074C6.61768 15.7007 3.61768 17.7007 3.61768 17.7007H21.6177C21.6177 17.7007 18.6177 15.7007 18.6177 8.70074Z" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.3477 21.7007C14.1719 22.0038 13.9195 22.2554 13.6159 22.4303C13.3123 22.6052 12.9681 22.6972 12.6177 22.6972C12.2673 22.6972 11.9231 22.6052 11.6195 22.4303C11.3159 22.2554 11.0635 22.0038 10.8877 21.7007" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <img src="profile-placeholder.png" alt="User" />
                        </>
                    )}
                </div>
            </div>
            <div className='seperator'>
                <span></span>
            </div>
            <div className='header-bottom'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                    <path d="M18.3414 6.90201H2.64159C2.28398 6.90201 1.98743 6.60546 1.98743 6.24785C1.98743 5.89024 2.28398 5.59369 2.64159 5.59369H18.3414C18.699 5.59369 18.9956 5.89024 18.9956 6.24785C18.9956 6.60546 18.699 6.90201 18.3414 6.90201Z" fill="black" />
                    <path d="M18.3414 11.2631H2.64159C2.28398 11.2631 1.98743 10.9665 1.98743 10.6089C1.98743 10.2513 2.28398 9.95477 2.64159 9.95477H18.3414C18.699 9.95477 18.9956 10.2513 18.9956 10.6089C18.9956 10.9665 18.699 11.2631 18.3414 11.2631Z" fill="black" />
                    <path d="M18.3414 15.6242H2.64159C2.28398 15.6242 1.98743 15.3276 1.98743 14.97C1.98743 14.6124 2.28398 14.3159 2.64159 14.3159H18.3414C18.699 14.3159 18.9956 14.6124 18.9956 14.97C18.9956 15.3276 18.699 15.6242 18.3414 15.6242Z" fill="black" />
                </svg>
                <div>
                    <nav className="nav-links">
                        <Link >All Categories</Link>
                        <Link >Blog</Link>
                        <Link to='/contact'>Contact us</Link>
                        <Link >About us</Link>
                        <Link >More</Link>

                    </nav>
                </div>
                <div className='common-links'>
                    <a href="#">Write a Review</a>
                    <a href="#">Vendor</a>
                </div>
            </div>

        </header >
    );
};

export default Header;
