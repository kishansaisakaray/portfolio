import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <h1>💼 Kishan's Portfolio</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;