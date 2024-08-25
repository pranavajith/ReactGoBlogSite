import React from 'react';
import '../styles/header.css';

export const Header = ({ userData }) => {
    let placeHolder = (
        <a href = "/">Sign In</a>
    );
    if (userData) placeHolder = (
        <a href = "/">{userData.name}</a>
    )
    return (
        <header>
            <h1>
            Pranav's Blogger
            </h1>

            <ul>
                <li><a href = "/">About Us</a></li>
                <li><a href = "/">Contact Us</a></li>
                <li>{placeHolder}</li>
            </ul>
        </header>
    )
}