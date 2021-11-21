import React from "react";

export default function Header() {
    return(
        <nav>
            <img src="/images/profile.png" alt="Profile logo" className="header--profil"/>
            <img src="/images/news-logo.png" alt="Company logo" className="header--logo"/>
            <h4 className="">Homepage</h4>
            <h3 className="">Vera Kempf</h3>
        </nav>
    )
}