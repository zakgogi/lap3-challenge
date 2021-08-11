import React from 'react';
import './style.css'

const returnHome = () => {
    window.location.assign("/");
}


const Header = () => {
    return (
        <nav>
            <div onClick={returnHome} class="icon">
                <img src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"/>
            </div>
            <div class="navSearch">
                <input type="text" placeholder="Search or jump to..."></input>
            </div>
            <ul>
                <li>
                    Pull Requests
                </li>
                <li>
                    Issues
                </li>
                <li>
                    Marketplace
                </li>
                <li>
                    Explore
                </li>
            </ul>
            <div class="otherButtons">
                <img src="../../Assets/image.png"/>
            </div>
        </nav>
    )
};

export default Header;