// Contact.js
import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import './ContactPage.css'; // CSS styles for the contact page
import location1 from '../assets/locations/Location1.svg';
import location2 from '../assets/locations/Location2.svg';
import location3 from '../assets/locations/Location3.svg';
import location4 from '../assets/locations/Location4.svg';


const Contact = () => {

    const [selectedButton, setSelectedButton] = useState(null);
    const [loading, setLoading] = useState(true); // State for loading
    const [data, setData] = useState(null); // Example state for fetched data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [link, setLink] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            // Simulate data fetching
            setLoading(true);
            try {
                // Simulated fetch call (replace with actual API call)
                const response = await fetch('your-api-url');
                const result = await response.json();
                setData(result); // Set the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/; // Simple validation for 10 digits
        return phoneRegex.test(phone);
    };

    const validateForm = () => {
        let formErrors = {};

        if (!name.trim()) formErrors.name = "Name is required";
        if (!email) formErrors.email = "Email is required";
        else if (!validateEmail(email)) formErrors.email = "Email is not valid";
        if (!phone) formErrors.phone = "Phone is required";
        else if (!validatePhone(phone)) formErrors.phone = "Phone is not valid";
        if (!country.trim()) formErrors.country = "Country is required";
        if (!message.trim()) formErrors.message = "Message is required";

        setErrors(formErrors);

        // If no errors, return true
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, handle submission (e.g., send data to server)
            console.log("Form submitted successfully!");
        }
    };



    const handleButtonClick = (buttonName) => {
        // If the clicked button is already selected, set it to null (toggle off)
        setSelectedButton(prev => (prev === buttonName ? null : buttonName));
    };

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <>
            <div className="contact-page">
                <div className="common-contact">
                    <div className="contact-left">
                        <h2>Contact Us –</h2>
                        <h2>Your Feedback Shapes <br />
                            <span className="highlight">Our Excellence</span></h2>
                        <div className="contact-info">
                            <p>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                                        <path d="M2.29871 5.34922C2.29871 4.50727 2.63317 3.69979 3.22853 3.10444C3.82388 2.50909 4.63135 2.17462 5.47331 2.17462H27.6955C28.5375 2.17462 29.345 2.50909 29.9403 3.10444C30.5357 3.69979 30.8701 4.50727 30.8701 5.34922V21.2222C30.8701 22.0642 30.5357 22.8717 29.9403 23.467C29.345 24.0624 28.5375 24.3968 27.6955 24.3968H5.47331C4.63135 24.3968 3.82388 24.0624 3.22853 23.467C2.63317 22.8717 2.29871 22.0642 2.29871 21.2222V5.34922Z" stroke="#FF5F2D" stroke-width="3.23232" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.29865 5.34917L16.5844 14.873L30.8701 5.34917" stroke="#FF5F2D" stroke-width="3.23232" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                andreaDesign@gmail.com
                            </p>
                            <p>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M29.5072 22.466C29.2525 24.4018 28.3018 26.1787 26.8328 27.4648C25.3637 28.7508 23.4767 29.4582 21.5242 29.4547C10.1812 29.4547 0.952467 20.226 0.952467 8.88291C0.948967 6.93043 1.65632 5.04344 2.94241 3.57438C4.22849 2.10532 6.00537 1.15464 7.94116 0.899911C8.43067 0.84014 8.92639 0.940286 9.35431 1.1854C9.78222 1.43051 10.1194 1.80745 10.3155 2.25993L13.3327 8.99577V9.01291C13.4828 9.35928 13.5448 9.73744 13.5131 10.1136C13.4815 10.4898 13.3572 10.8523 13.1512 11.1687C13.1255 11.2072 13.0984 11.2429 13.0698 11.2787L10.0955 14.8044C11.1655 16.9788 13.4398 19.2331 15.6427 20.306L19.1199 17.3473C19.1541 17.3186 19.1898 17.2919 19.2271 17.2673C19.5432 17.0565 19.9069 16.9278 20.2853 16.8928C20.6637 16.8579 21.0449 16.9179 21.3942 17.0673L21.4128 17.0759L28.1429 20.0917C28.5962 20.2871 28.9741 20.6239 29.22 21.0519C29.4659 21.4799 29.5667 21.976 29.5072 22.466Z" fill="#FF5F2D" />
                                    </svg>
                                </span>
                                +34 123 456 789
                            </p>
                            <p>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="38" viewBox="0 0 30 38" fill="none">
                                        <path d="M14.9999 0.844177C11.2125 0.848645 7.58143 2.35518 4.90331 5.0333C2.22519 7.71142 0.718656 11.3424 0.714188 15.1299C0.709651 18.225 1.72065 21.2361 3.59211 23.7013C3.59211 23.7013 3.98172 24.2143 4.04535 24.2883L14.9999 37.2078L25.9596 24.2818C26.0168 24.213 26.4077 23.7013 26.4077 23.7013L26.409 23.6974C28.2795 21.2333 29.29 18.2235 29.2856 15.1299C29.2811 11.3424 27.7746 7.71142 25.0965 5.0333C22.4183 2.35518 18.7873 0.848645 14.9999 0.844177ZM14.9999 20.3247C13.9725 20.3247 12.9681 20.02 12.1138 19.4492C11.2595 18.8784 10.5937 18.0671 10.2005 17.1178C9.80734 16.1686 9.70446 15.1241 9.9049 14.1164C10.1053 13.1087 10.6001 12.1831 11.3266 11.4566C12.0531 10.7301 12.9787 10.2353 13.9864 10.0349C14.9941 9.83445 16.0386 9.93733 16.9879 10.3305C17.9371 10.7237 18.7484 11.3895 19.3192 12.2438C19.89 13.0981 20.1947 14.1024 20.1947 15.1299C20.193 16.5071 19.6451 17.8274 18.6713 18.8013C17.6974 19.7751 16.3771 20.323 14.9999 20.3247Z" fill="#FF5F2D" />
                                    </svg>
                                </span>
                                123 Street 487 House
                            </p>
                        </div>

                        <div className="social-links">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                                <path d="M0.0474243 2.74545C0.0474243 1.69045 0.924091 0.835449 2.00576 0.835449H24.7558C25.8374 0.835449 26.7141 1.69045 26.7141 2.74545V25.5921C26.7141 26.6471 25.8374 27.5021 24.7558 27.5021H2.00576C0.924091 27.5021 0.0474243 26.6471 0.0474243 25.5921V2.74545ZM8.28576 23.1588V11.1171H4.28409V23.1588H8.28576ZM6.28576 9.47212C7.68076 9.47212 8.54909 8.54878 8.54909 7.39212C8.52409 6.21045 7.68242 5.31212 6.31242 5.31212C4.94242 5.31212 4.04742 6.21212 4.04742 7.39212C4.04742 8.54878 4.91576 9.47212 6.25909 9.47212H6.28576ZM14.4658 23.1588V16.4338C14.4658 16.0738 14.4924 15.7138 14.5991 15.4571C14.8874 14.7388 15.5458 13.9938 16.6524 13.9938C18.1008 13.9938 18.6791 15.0971 18.6791 16.7171V23.1588H22.6808V16.2521C22.6808 12.5521 20.7074 10.8321 18.0741 10.8321C15.9508 10.8321 14.9991 11.9988 14.4658 12.8204V12.8621H14.4391C14.4479 12.8482 14.4568 12.8343 14.4658 12.8204V11.1171H10.4658C10.5158 12.2471 10.4658 23.1588 10.4658 23.1588H14.4658Z" fill="#FF5F2D" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                                <path d="M14.7041 0.837395C15.6771 0.833661 16.65 0.84344 17.6227 0.866727L17.8813 0.87606C18.18 0.886726 18.4746 0.900058 18.8306 0.916057C20.2492 0.982721 21.2171 1.20671 22.0664 1.53603C22.9464 1.87468 23.6877 2.33332 24.429 3.07461C25.1068 3.74072 25.6313 4.54647 25.9662 5.43583C26.2955 6.28512 26.5195 7.2544 26.5862 8.67299C26.6022 9.02764 26.6155 9.32363 26.6262 9.62228L26.6342 9.88093C26.6579 10.8531 26.6681 11.8256 26.6649 12.7981L26.6662 13.7927V15.5393C26.6695 16.5122 26.6593 17.4852 26.6355 18.4578L26.6275 18.7165C26.6169 19.0151 26.6035 19.3098 26.5875 19.6658C26.5209 21.0844 26.2942 22.0523 25.9662 22.9016C25.6324 23.7919 25.1077 24.5983 24.429 25.2641C23.7623 25.9419 22.9561 26.4664 22.0664 26.8014C21.2171 27.1307 20.2492 27.3547 18.8306 27.4214C18.4746 27.4374 18.18 27.4507 17.8813 27.4614L17.6227 27.4694C16.65 27.4931 15.6771 27.5033 14.7041 27.5L13.7095 27.5014H11.9643C10.9913 27.5047 10.0184 27.4944 9.04576 27.4707L8.78711 27.4627C8.4706 27.4512 8.15417 27.4379 7.83782 27.4227C6.41923 27.356 5.45128 27.1294 4.60066 26.8014C3.71095 26.4672 2.90506 25.9425 2.23944 25.2641C1.56087 24.5979 1.0358 23.7916 0.700856 22.9016C0.371539 22.0523 0.14755 21.0844 0.0808872 19.6658C0.0660385 19.3494 0.0527057 19.033 0.0408893 18.7165L0.0342231 18.4578C0.00964249 17.4852 -0.00146924 16.5123 0.000891365 15.5393V12.7981C-0.00282973 11.8256 0.00694859 10.8531 0.0302233 9.88093L0.0395561 9.62228C0.0502222 9.32363 0.0635548 9.02764 0.079554 8.67299C0.146217 7.25307 0.370206 6.28645 0.699522 5.43583C1.03467 4.54603 1.56076 3.74051 2.24078 3.07595C2.90594 2.39698 3.71132 1.87144 4.60066 1.53603C5.45128 1.20671 6.4179 0.982721 7.83782 0.916057L8.78711 0.87606L9.04576 0.869393C10.018 0.844825 10.9904 0.833713 11.9629 0.836062L14.7041 0.837395ZM13.3335 7.50372C12.4503 7.49123 11.5733 7.65441 10.7536 7.98379C9.93398 8.31316 9.18795 8.80216 8.55891 9.42236C7.92988 10.0426 7.43038 10.7816 7.08944 11.5965C6.74851 12.4115 6.57294 13.286 6.57294 14.1694C6.57294 15.0527 6.74851 15.9273 7.08944 16.7422C7.43038 17.5572 7.92988 18.2962 8.55891 18.9164C9.18795 19.5366 9.93398 20.0256 10.7536 20.355C11.5733 20.6843 12.4503 20.8475 13.3335 20.835C15.1016 20.835 16.7972 20.1327 18.0473 18.8825C19.2975 17.6323 19.9999 15.9367 19.9999 14.1687C19.9999 12.4007 19.2975 10.7051 18.0473 9.45491C16.7972 8.20473 15.1016 7.50372 13.3335 7.50372ZM13.3335 10.1703C13.8649 10.1605 14.3928 10.2566 14.8865 10.4532C15.3802 10.6497 15.8299 10.9427 16.2091 11.3149C16.5883 11.6872 16.8896 12.1313 17.0953 12.6212C17.301 13.1112 17.4069 13.6373 17.407 14.1687C17.4071 14.7001 17.3013 15.2262 17.0958 15.7163C16.8903 16.2063 16.5892 16.6505 16.2101 17.0229C15.8309 17.3953 15.3814 17.6884 14.8878 17.8851C14.3941 18.0818 13.8662 18.1781 13.3349 18.1685C12.2741 18.1685 11.2567 17.7471 10.5066 16.997C9.75648 16.2469 9.33508 15.2295 9.33508 14.1687C9.33508 13.1079 9.75648 12.0905 10.5066 11.3404C11.2567 10.5903 12.2741 10.1689 13.3349 10.1689L13.3335 10.1703ZM20.3332 5.50382C19.9031 5.52104 19.4963 5.70401 19.198 6.01442C18.8998 6.32484 18.7332 6.73861 18.7332 7.16907C18.7332 7.59954 18.8998 8.0133 19.198 8.32372C19.4963 8.63413 19.9031 8.8171 20.3332 8.83432C20.7752 8.83432 21.1991 8.65873 21.5116 8.34619C21.8242 8.03364 21.9998 7.60974 21.9998 7.16774C21.9998 6.72573 21.8242 6.30183 21.5116 5.98929C21.1991 5.67674 20.7752 5.50116 20.3332 5.50116V5.50382Z" fill="#FF5F2D" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <g opacity="0.3">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6685 24.5416L8.01794 6.45831H10.662L23.2944 24.5416H20.6685Z" fill="white" />
                                    <path d="M11.3348 5.16663H5.53784L19.9954 25.8332H25.7717L11.3348 5.16663Z" fill="#FF5F2D" />
                                </g>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0852 15.965L14.6223 18.135L6.94979 27.1249H3.53979L13.0852 15.965Z" fill="#FF5F2D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7883 3.875L17.7983 14.415L16.2742 12.2321L23.43 3.875H26.7883Z" fill="#FF5F2D" />
                                <path d="M10.6627 6.45833L23.2939 24.5416H20.6693L8.0187 6.45833H10.6627ZM12.0099 3.875H3.05872L19.3246 27.1249H28.25L12.0099 3.875Z" fill="#FF5F2D" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <g clip-path="url(#clip0_1_1705)">
                                    <path d="M28.4163 15.5C28.4163 8.37003 22.6296 2.58337 15.4996 2.58337C8.36966 2.58337 2.58301 8.37003 2.58301 15.5C2.58301 21.7517 7.02633 26.9571 12.9163 28.1583V19.375H10.333V15.5H12.9163V12.2708C12.9163 9.77794 14.9442 7.75003 17.4371 7.75003H20.6663V11.625H18.083C17.3726 11.625 16.7913 12.2063 16.7913 12.9167V15.5H20.6663V19.375H16.7913V28.3521C23.3142 27.7062 28.4163 22.2037 28.4163 15.5Z" fill="#FF5F2D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1705">
                                        <rect width="30.9999" height="30.9999" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </div>
                    <div className="contact-right">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>I'm interested in:</h3>
                            <div className="interests">
                                <button
                                    type="button"
                                    className={`sales-button ${selectedButton === 'Sales' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('Sales')}
                                >
                                    Sales
                                </button>
                                <button
                                    type="button"
                                    className={`get-demo-button ${selectedButton === 'Get Demo' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('Get Demo')}
                                >
                                    Get Demo
                                </button>
                                <button
                                    type="button"
                                    className={`user-support-button ${selectedButton === 'User Support' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('User Support')}
                                >
                                    User Support
                                </button>
                            </div>
                            <div className="interests">
                                <button
                                    type="button"
                                    className={`vendor-support-button ${selectedButton === 'Vendor Support' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('Vendor Support')}
                                >
                                    Vendor Support
                                </button>
                                <button
                                    type="button"
                                    className={`other-button ${selectedButton === 'Other' ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('Other')}
                                >
                                    Other
                                </button>
                            </div>

                            <div className='pair'>
                                <div className="labelled">
                                    <label htmlFor='your-name'>Your Name</label>
                                    <input
                                        id='your-name'
                                        type="text"
                                        placeholder="Your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {errors.name && <span className="error">{errors.name}</span>}
                                </div>

                                <div className="labelled">
                                    <label htmlFor='your-email'>Your Email</label>
                                    <input
                                        id='your-email'
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <span className="error">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="pair">
                                <div className='labelled'>
                                    <label htmlFor='phone'>Phone</label>
                                    <input
                                        id='phone'
                                        type="text"
                                        placeholder="Phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                </div>
                                <div className='labelled'>
                                    <label htmlFor='country'>Country</label>
                                    <input
                                        id='country'
                                        type="text"
                                        placeholder="Country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                    {errors.country && <span className="error">{errors.country}</span>}
                                </div>
                            </div>

                            <div className="pair">
                                <div className='labelled'>
                                    <label htmlFor='link'>Link</label>
                                    <input
                                        id='link'
                                        type="url"
                                        placeholder="Link"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="textarea">
                                <label htmlFor='message'>Your Message</label>
                                <textarea
                                    id='message'
                                    placeholder="Your message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                {errors.message && <span className="error">{errors.message}</span>}
                            </div>

                            <button type="submit" className="submit-btn">Send message</button>
                        </form>

                    </div>


                </div>
            </div>
            <div className="locations-section">
                <h3>Find Us</h3>
                <h1>Our Locations</h1>
                <div className="locations">
                    <div className="location-item">
                        <img src={location1} alt="Card" />
                    </div>
                    <div className="location-item">
                        <img src={location2} alt="Card" />
                    </div>
                    <div className="location-item">
                        <img src={location3} alt="Card" />
                    </div>
                    <div className="location-item">
                        <img src={location4} alt="Card" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
