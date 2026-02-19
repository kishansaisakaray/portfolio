import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Kishan Saisalaray. All rights reserved. 💜</p>
            <div>
                <a href="https://github.com/kishansaisakaray" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
                <a href="https://linkedin.com/in/kishansaisakaray" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                <a href="https://twitter.com/kishansaisakaray" target="_blank" rel="noopener noreferrer">𝕏 Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;