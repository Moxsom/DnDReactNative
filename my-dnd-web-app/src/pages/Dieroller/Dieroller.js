import React from 'react';

const dieroller = () => {
    return (
        <div>            
            <div>
                <header className="header">
                    <nav className="navbar">
                        <ul className="navbar-list">
                            <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                            <li className="navbar-item"><a href="./Library" className="navbar-link">Library</a></li>
                            <li className="navbar-item"><a href="/characters" className="navbar-link">Characters</a></li>
                            <li className="navbar-item"><a href="/dieroller" className="navbar-link">Dice</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
            <h1>Dice page</h1>
        </div>
    );
};

export default dieroller;