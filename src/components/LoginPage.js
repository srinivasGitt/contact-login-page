// Login.js
import React, { useState } from 'react';
import Layout from './Layout';
import './LoginPage.css'; // CSS styles for login page
import card from '../assets/images/card3.svg';
import { useNavigate } from 'react-router-dom';
import eye from '../assets/icons/eye.svg'
import NotVision from '../assets/icons/NotVision.svg'
import tick from '../assets/icons/tick.svg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errors, setErrors] = useState({});
    const [isEmailValid, setIsEmailValid] = useState(false); // State for email validation
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailPattern = /\S+@\S+\.\S+/;
        return emailPattern.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }

        if (!firstName) {
            newErrors.firstName = 'First Name is required';
        }

        if (!lastName) {
            newErrors.lastName = 'Last Name is required';
        }

        return newErrors;
    };

    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        setEmail(emailInput);
        setIsEmailValid(validateEmail(emailInput)); // Check email validity
    };

    const handleCreateAccount = (e) => {
        e.preventDefault(); // Prevent default form submission
        const validationErrors = validateForm();
        setErrors(validationErrors);

        // If there are no errors, navigate to /contact
        if (Object.keys(validationErrors).length === 0) {
            navigate('/contact');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword); // Toggle password visibility
    };


    return (
        <>
            <div className="login-page">
                <div className='whole-panel'>
                    <div className="left-panel">
                        <div className="quote">
                            <p>Quote related to user</p>
                        </div>
                        <div className='card'>
                            <img src={card} alt="Card" />
                        </div>
                        <div className="trusted-by">
                            <p className='trust'>Trusted By</p>
                            <div className='clients'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="97" height="32" viewBox="0 0 97 32" fill="none">
                                    <g clip-path="url(#clip0_1_959)">
                                        <path d="M41.2784 16.4104C41.2784 20.8521 37.7158 24.1252 33.3437 24.1252C28.9715 24.1252 25.4089 20.8521 25.4089 16.4104C25.4089 11.9374 28.9715 8.69562 33.3437 8.69562C37.7158 8.69562 41.2784 11.9374 41.2784 16.4104ZM37.805 16.4104C37.805 13.6347 35.7402 11.7356 33.3437 11.7356C30.9472 11.7356 28.8824 13.6347 28.8824 16.4104C28.8824 19.1582 30.9472 21.0852 33.3437 21.0852C35.7402 21.0852 37.805 19.1547 37.805 16.4104Z" fill="#CFD7DE" />
                                        <path d="M58.3961 16.4104C58.3961 20.8521 54.8335 24.1252 50.4614 24.1252C46.0892 24.1252 42.5266 20.8521 42.5266 16.4104C42.5266 11.9408 46.0892 8.69562 50.4614 8.69562C54.8335 8.69562 58.3961 11.9374 58.3961 16.4104ZM54.9226 16.4104C54.9226 13.6347 52.8578 11.7356 50.4614 11.7356C48.0649 11.7356 46.0001 13.6347 46.0001 16.4104C46.0001 19.1582 48.0649 21.0852 50.4614 21.0852C52.8578 21.0852 54.9226 19.1547 54.9226 16.4104Z" fill="#CFD7DE" />
                                        <path d="M74.8006 9.1617V23.0121C74.8006 28.7095 71.3557 31.0365 67.2831 31.0365C63.4495 31.0365 61.1421 28.5356 60.272 26.4904L63.2961 25.2626C63.8346 26.5182 65.1541 28 67.2795 28C69.8864 28 71.5019 26.4313 71.5019 23.4782V22.3687H71.3806C70.6032 23.3043 69.1054 24.1217 67.2153 24.1217C63.2604 24.1217 59.6372 20.7617 59.6372 16.4382C59.6372 12.0834 63.2604 8.69562 67.2153 8.69562C69.1018 8.69562 70.5996 9.51301 71.3806 10.4208H71.5019V9.16518H74.8006V9.1617ZM71.748 16.4382C71.748 13.7217 69.89 11.7356 67.5256 11.7356C65.1291 11.7356 63.1214 13.7217 63.1214 16.4382C63.1214 19.1269 65.1291 21.0852 67.5256 21.0852C69.89 21.0852 71.748 19.1269 71.748 16.4382Z" fill="#CFD7DE" />
                                        <path d="M80.2391 1.04346V23.6521H76.8512V1.04346H80.2391Z" fill="#CFD7DE" />
                                        <path d="M93.4412 18.9495L96.1372 20.7026C95.2671 21.9582 93.1702 24.1217 89.5469 24.1217C85.0535 24.1217 81.6978 20.7339 81.6978 16.4069C81.6978 11.8191 85.0821 8.69214 89.1582 8.69214C93.2629 8.69214 95.2706 11.8782 95.9268 13.6L96.287 14.4765L85.7133 18.7478C86.5228 20.2956 87.7817 21.0852 89.5469 21.0852C91.3157 21.0852 92.5425 20.2365 93.4412 18.9495ZM85.1427 16.1739L92.2108 13.3113C91.8221 12.3478 90.6524 11.6765 89.2759 11.6765C87.5106 11.6765 85.0535 13.1965 85.1427 16.1739Z" fill="#CFD7DE" />
                                        <path d="M12.5851 14.4035V11.1305H23.8934C24.004 11.7009 24.061 12.3757 24.061 13.1061C24.061 15.5618 23.3728 18.5983 21.1546 20.7618C18.9971 22.9531 16.2404 24.1218 12.5886 24.1218C5.82004 24.1218 0.128418 18.7444 0.128418 12.1426C0.128418 5.5409 5.82004 0.163513 12.5886 0.163513C16.3331 0.163513 19.0006 1.59656 21.0048 3.46438L18.6369 5.77395C17.1997 4.45917 15.2526 3.43656 12.5851 3.43656C7.64235 3.43656 3.77662 7.32177 3.77662 12.1426C3.77662 16.9635 7.64235 20.8487 12.5851 20.8487C15.7911 20.8487 17.6169 19.5931 18.7867 18.4522C19.7353 17.527 20.3593 16.2053 20.6054 14.4L12.5851 14.4035Z" fill="#CFD7DE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_959">
                                            <rect width="97" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="97" height="32" viewBox="0 0 97 32" fill="none">
                                    <g clip-path="url(#clip0_1_980)">
                                        <path d="M41.2784 16.4104C41.2784 20.8521 37.7158 24.1252 33.3437 24.1252C28.9715 24.1252 25.4089 20.8521 25.4089 16.4104C25.4089 11.9374 28.9715 8.69562 33.3437 8.69562C37.7158 8.69562 41.2784 11.9374 41.2784 16.4104ZM37.805 16.4104C37.805 13.6347 35.7402 11.7356 33.3437 11.7356C30.9472 11.7356 28.8824 13.6347 28.8824 16.4104C28.8824 19.1582 30.9472 21.0852 33.3437 21.0852C35.7402 21.0852 37.805 19.1547 37.805 16.4104Z" fill="#CFD7DE" />
                                        <path d="M58.3961 16.4104C58.3961 20.8521 54.8335 24.1252 50.4614 24.1252C46.0892 24.1252 42.5266 20.8521 42.5266 16.4104C42.5266 11.9408 46.0892 8.69562 50.4614 8.69562C54.8335 8.69562 58.3961 11.9374 58.3961 16.4104ZM54.9226 16.4104C54.9226 13.6347 52.8578 11.7356 50.4614 11.7356C48.0649 11.7356 46.0001 13.6347 46.0001 16.4104C46.0001 19.1582 48.0649 21.0852 50.4614 21.0852C52.8578 21.0852 54.9226 19.1547 54.9226 16.4104Z" fill="#CFD7DE" />
                                        <path d="M74.8006 9.1617V23.0121C74.8006 28.7095 71.3557 31.0365 67.2831 31.0365C63.4495 31.0365 61.1421 28.5356 60.272 26.4904L63.2961 25.2626C63.8346 26.5182 65.1541 28 67.2795 28C69.8864 28 71.5019 26.4313 71.5019 23.4782V22.3687H71.3806C70.6032 23.3043 69.1054 24.1217 67.2153 24.1217C63.2604 24.1217 59.6372 20.7617 59.6372 16.4382C59.6372 12.0834 63.2604 8.69562 67.2153 8.69562C69.1018 8.69562 70.5996 9.51301 71.3806 10.4208H71.5019V9.16518H74.8006V9.1617ZM71.748 16.4382C71.748 13.7217 69.89 11.7356 67.5256 11.7356C65.1291 11.7356 63.1214 13.7217 63.1214 16.4382C63.1214 19.1269 65.1291 21.0852 67.5256 21.0852C69.89 21.0852 71.748 19.1269 71.748 16.4382Z" fill="#CFD7DE" />
                                        <path d="M80.2391 1.04346V23.6521H76.8512V1.04346H80.2391Z" fill="#CFD7DE" />
                                        <path d="M93.4412 18.9495L96.1372 20.7026C95.2671 21.9582 93.1702 24.1217 89.5469 24.1217C85.0535 24.1217 81.6978 20.7339 81.6978 16.4069C81.6978 11.8191 85.0821 8.69214 89.1582 8.69214C93.2629 8.69214 95.2706 11.8782 95.9268 13.6L96.287 14.4765L85.7133 18.7478C86.5228 20.2956 87.7817 21.0852 89.5469 21.0852C91.3157 21.0852 92.5425 20.2365 93.4412 18.9495ZM85.1427 16.1739L92.2108 13.3113C91.8221 12.3478 90.6524 11.6765 89.2759 11.6765C87.5106 11.6765 85.0535 13.1965 85.1427 16.1739Z" fill="#CFD7DE" />
                                        <path d="M12.5851 14.4035V11.1305H23.8934C24.004 11.7009 24.061 12.3757 24.061 13.1061C24.061 15.5618 23.3728 18.5983 21.1546 20.7618C18.9971 22.9531 16.2404 24.1218 12.5886 24.1218C5.82004 24.1218 0.128418 18.7444 0.128418 12.1426C0.128418 5.5409 5.82004 0.163513 12.5886 0.163513C16.3331 0.163513 19.0006 1.59656 21.0048 3.46438L18.6369 5.77395C17.1997 4.45917 15.2526 3.43656 12.5851 3.43656C7.64235 3.43656 3.77662 7.32177 3.77662 12.1426C3.77662 16.9635 7.64235 20.8487 12.5851 20.8487C15.7911 20.8487 17.6169 19.5931 18.7867 18.4522C19.7353 17.527 20.3593 16.2053 20.6054 14.4L12.5851 14.4035Z" fill="#CFD7DE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_980">
                                            <rect width="97" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="97" height="32" viewBox="0 0 97 32" fill="none">
                                    <g clip-path="url(#clip0_1_945)">
                                        <path d="M41.2784 16.4104C41.2784 20.8521 37.7158 24.1252 33.3437 24.1252C28.9715 24.1252 25.4089 20.8521 25.4089 16.4104C25.4089 11.9374 28.9715 8.69562 33.3437 8.69562C37.7158 8.69562 41.2784 11.9374 41.2784 16.4104ZM37.805 16.4104C37.805 13.6347 35.7402 11.7356 33.3437 11.7356C30.9472 11.7356 28.8824 13.6347 28.8824 16.4104C28.8824 19.1582 30.9472 21.0852 33.3437 21.0852C35.7402 21.0852 37.805 19.1547 37.805 16.4104Z" fill="#CFD7DE" />
                                        <path d="M58.3961 16.4104C58.3961 20.8521 54.8335 24.1252 50.4614 24.1252C46.0892 24.1252 42.5266 20.8521 42.5266 16.4104C42.5266 11.9408 46.0892 8.69562 50.4614 8.69562C54.8335 8.69562 58.3961 11.9374 58.3961 16.4104ZM54.9226 16.4104C54.9226 13.6347 52.8578 11.7356 50.4614 11.7356C48.0649 11.7356 46.0001 13.6347 46.0001 16.4104C46.0001 19.1582 48.0649 21.0852 50.4614 21.0852C52.8578 21.0852 54.9226 19.1547 54.9226 16.4104Z" fill="#CFD7DE" />
                                        <path d="M74.8006 9.1617V23.0121C74.8006 28.7095 71.3557 31.0365 67.2831 31.0365C63.4495 31.0365 61.1421 28.5356 60.272 26.4904L63.2961 25.2626C63.8346 26.5182 65.1541 28 67.2795 28C69.8864 28 71.5019 26.4313 71.5019 23.4782V22.3687H71.3806C70.6032 23.3043 69.1054 24.1217 67.2153 24.1217C63.2604 24.1217 59.6372 20.7617 59.6372 16.4382C59.6372 12.0834 63.2604 8.69562 67.2153 8.69562C69.1018 8.69562 70.5996 9.51301 71.3806 10.4208H71.5019V9.16518H74.8006V9.1617ZM71.748 16.4382C71.748 13.7217 69.89 11.7356 67.5256 11.7356C65.1291 11.7356 63.1214 13.7217 63.1214 16.4382C63.1214 19.1269 65.1291 21.0852 67.5256 21.0852C69.89 21.0852 71.748 19.1269 71.748 16.4382Z" fill="#CFD7DE" />
                                        <path d="M80.2391 1.04346V23.6521H76.8512V1.04346H80.2391Z" fill="#CFD7DE" />
                                        <path d="M93.4412 18.9495L96.1372 20.7026C95.2671 21.9582 93.1702 24.1217 89.5469 24.1217C85.0535 24.1217 81.6978 20.7339 81.6978 16.4069C81.6978 11.8191 85.0821 8.69214 89.1582 8.69214C93.2629 8.69214 95.2706 11.8782 95.9268 13.6L96.287 14.4765L85.7133 18.7478C86.5228 20.2956 87.7817 21.0852 89.5469 21.0852C91.3157 21.0852 92.5425 20.2365 93.4412 18.9495ZM85.1427 16.1739L92.2108 13.3113C91.8221 12.3478 90.6524 11.6765 89.2759 11.6765C87.5106 11.6765 85.0535 13.1965 85.1427 16.1739Z" fill="#CFD7DE" />
                                        <path d="M12.5851 14.4035V11.1305H23.8934C24.004 11.7009 24.061 12.3757 24.061 13.1061C24.061 15.5618 23.3728 18.5983 21.1546 20.7618C18.9971 22.9531 16.2404 24.1218 12.5886 24.1218C5.82004 24.1218 0.128418 18.7444 0.128418 12.1426C0.128418 5.5409 5.82004 0.163513 12.5886 0.163513C16.3331 0.163513 19.0006 1.59656 21.0048 3.46438L18.6369 5.77395C17.1997 4.45917 15.2526 3.43656 12.5851 3.43656C7.64235 3.43656 3.77662 7.32177 3.77662 12.1426C3.77662 16.9635 7.64235 20.8487 12.5851 20.8487C15.7911 20.8487 17.6169 19.5931 18.7867 18.4522C19.7353 17.527 20.3593 16.2053 20.6054 14.4L12.5851 14.4035Z" fill="#CFD7DE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_945">
                                            <rect width="97" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="97" height="32" viewBox="0 0 97 32" fill="none">
                                    <g clip-path="url(#clip0_1_945)">
                                        <path d="M41.2784 16.4104C41.2784 20.8521 37.7158 24.1252 33.3437 24.1252C28.9715 24.1252 25.4089 20.8521 25.4089 16.4104C25.4089 11.9374 28.9715 8.69562 33.3437 8.69562C37.7158 8.69562 41.2784 11.9374 41.2784 16.4104ZM37.805 16.4104C37.805 13.6347 35.7402 11.7356 33.3437 11.7356C30.9472 11.7356 28.8824 13.6347 28.8824 16.4104C28.8824 19.1582 30.9472 21.0852 33.3437 21.0852C35.7402 21.0852 37.805 19.1547 37.805 16.4104Z" fill="#CFD7DE" />
                                        <path d="M58.3961 16.4104C58.3961 20.8521 54.8335 24.1252 50.4614 24.1252C46.0892 24.1252 42.5266 20.8521 42.5266 16.4104C42.5266 11.9408 46.0892 8.69562 50.4614 8.69562C54.8335 8.69562 58.3961 11.9374 58.3961 16.4104ZM54.9226 16.4104C54.9226 13.6347 52.8578 11.7356 50.4614 11.7356C48.0649 11.7356 46.0001 13.6347 46.0001 16.4104C46.0001 19.1582 48.0649 21.0852 50.4614 21.0852C52.8578 21.0852 54.9226 19.1547 54.9226 16.4104Z" fill="#CFD7DE" />
                                        <path d="M74.8006 9.1617V23.0121C74.8006 28.7095 71.3557 31.0365 67.2831 31.0365C63.4495 31.0365 61.1421 28.5356 60.272 26.4904L63.2961 25.2626C63.8346 26.5182 65.1541 28 67.2795 28C69.8864 28 71.5019 26.4313 71.5019 23.4782V22.3687H71.3806C70.6032 23.3043 69.1054 24.1217 67.2153 24.1217C63.2604 24.1217 59.6372 20.7617 59.6372 16.4382C59.6372 12.0834 63.2604 8.69562 67.2153 8.69562C69.1018 8.69562 70.5996 9.51301 71.3806 10.4208H71.5019V9.16518H74.8006V9.1617ZM71.748 16.4382C71.748 13.7217 69.89 11.7356 67.5256 11.7356C65.1291 11.7356 63.1214 13.7217 63.1214 16.4382C63.1214 19.1269 65.1291 21.0852 67.5256 21.0852C69.89 21.0852 71.748 19.1269 71.748 16.4382Z" fill="#CFD7DE" />
                                        <path d="M80.2391 1.04346V23.6521H76.8512V1.04346H80.2391Z" fill="#CFD7DE" />
                                        <path d="M93.4412 18.9495L96.1372 20.7026C95.2671 21.9582 93.1702 24.1217 89.5469 24.1217C85.0535 24.1217 81.6978 20.7339 81.6978 16.4069C81.6978 11.8191 85.0821 8.69214 89.1582 8.69214C93.2629 8.69214 95.2706 11.8782 95.9268 13.6L96.287 14.4765L85.7133 18.7478C86.5228 20.2956 87.7817 21.0852 89.5469 21.0852C91.3157 21.0852 92.5425 20.2365 93.4412 18.9495ZM85.1427 16.1739L92.2108 13.3113C91.8221 12.3478 90.6524 11.6765 89.2759 11.6765C87.5106 11.6765 85.0535 13.1965 85.1427 16.1739Z" fill="#CFD7DE" />
                                        <path d="M12.5851 14.4035V11.1305H23.8934C24.004 11.7009 24.061 12.3757 24.061 13.1061C24.061 15.5618 23.3728 18.5983 21.1546 20.7618C18.9971 22.9531 16.2404 24.1218 12.5886 24.1218C5.82004 24.1218 0.128418 18.7444 0.128418 12.1426C0.128418 5.5409 5.82004 0.163513 12.5886 0.163513C16.3331 0.163513 19.0006 1.59656 21.0048 3.46438L18.6369 5.77395C17.1997 4.45917 15.2526 3.43656 12.5851 3.43656C7.64235 3.43656 3.77662 7.32177 3.77662 12.1426C3.77662 16.9635 7.64235 20.8487 12.5851 20.8487C15.7911 20.8487 17.6169 19.5931 18.7867 18.4522C19.7353 17.527 20.3593 16.2053 20.6054 14.4L12.5851 14.4035Z" fill="#CFD7DE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_945">
                                            <rect width="97" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="right-panel">
                        <form className="login-form">
                            <label htmlFor="email">Email</label>
                            <div className="email-input-container">
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                {isEmailValid && <img src={tick}
                                    className="toggle-password-icon"
                                    style={{
                                        position: 'absolute',
                                        right: '-6px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer'
                                    }}
                                />} {/* Tick mark */}
                            </div>
                            {errors.email && <span className="error">{errors.email}</span>}

                            <label htmlFor="password">Password</label>
                            <div className='email-input-container'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <img
                                    src={showPassword ? NotVision : eye}
                                    alt={showPassword ? "Hide Password" : "Show Password"}
                                    onClick={togglePasswordVisibility}
                                    className="toggle-password-icon"
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer'
                                    }}
                                />
                            </div>
                            {errors.password && <span className="error">{errors.password}</span>}

                            <label htmlFor="firstName">First Name</label>
                            <div className='email-input-container'>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            {errors.firstName && <span className="error">{errors.firstName}</span>}

                            <label htmlFor="lastName">Last Name</label>
                            <div className='email-input-container'>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            {errors.lastName && <span className="error">{errors.lastName}</span>}

                            <p className="terms">
                                By creating an account,<br />
                                you agree to the
                                <a href="#" className="link">Privacy Policy</a> and
                                <a href="#" className="link">Terms of Use</a>.
                            </p>
                            <button type="submit" onClick={handleCreateAccount}>Create Account</button>
                            <p className='sign-in'>Already have an account? <a href="#" className='sign-link'>Sign In</a></p>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;
