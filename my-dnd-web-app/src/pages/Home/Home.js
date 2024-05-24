import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';
import DndLogo from '../../assets/dnd.png';

function Home() {
    return (
      
        <div>
            <header className="header">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                        <li className="navbar-item"><a href="/library" className="navbar-link">Library</a></li>
                        <li className="navbar-item"><a href="/characters" className="navbar-link">Characters</a></li>
                        <li className="navbar-item"><a href="/dieroller" className="navbar-link">Dice</a></li>
                    </ul>
                </nav>
            </header>
          <img src={DndLogo} alt="Dnd Logo" className="dnd-logo" />
      <h1>Your Store House</h1>      
      <button className="custom-button">Library</button>      
      <button className="custom-button">Characters</button>
      <button className="custom-button">Dice</button>
    </div>
    );
    
}

export default Home;