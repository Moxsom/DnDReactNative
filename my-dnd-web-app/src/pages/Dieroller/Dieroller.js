import React, { useState } from 'react';

// D6 Image imports
import diceOne from '../../assets/D6/dice-six-faces-one.png';
import diceTwo from '../../assets/D6/dice-six-faces-two.png';
import diceThree from '../../assets/D6/dice-six-faces-three.png';
import diceFour from '../../assets/D6/dice-six-faces-four.png';
import diceFive from '../../assets/D6/dice-six-faces-five.png';
import diceSix from '../../assets/D6/dice-six-faces-six.png';

const diceImages = {
    1: diceOne,
    2: diceTwo,
    3: diceThree,
    4: diceFour,
    5: diceFive,
    6: diceSix
};

const diceTypes = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
    d100: 100
};

const Dieroller = () => {
    const [selectedDice, setSelectedDice] = useState('d6');
    const [numberOfDice, setNumberOfDice] = useState(1);
    const [rolls, setRolls] = useState([]);

    const rollDice = () => {
        const diceMax = diceTypes[selectedDice];
        const newRolls = Array.from({ length: numberOfDice }, () => Math.floor(Math.random() * diceMax) + 1);
        setRolls(newRolls);
    };

    return (
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
            <h1>Dice Roller</h1>
            <div>
                <label htmlFor="diceType">Choose a dice type:</label>
                <select id="diceType" value={selectedDice} onChange={(e) => setSelectedDice(e.target.value)}>
                    {Object.keys(diceTypes).map((type) => (
                        <option key={type} value={type}>{type.toUpperCase()}</option>
                    ))}
                </select>
                <label htmlFor="numDice">Number of Dice:</label>
                <input type="number" id="numDice" value={numberOfDice} min="1" onChange={(e) => setNumberOfDice(parseInt(e.target.value, 10))} />
                <button onClick={rollDice}>Roll Dice</button>
            </div>
            {rolls.length > 0 && (
                <div>
                    <p>You rolled: {rolls.join(', ')}</p>
                    <div>
                        {rolls.map((roll, index) => (
                            <img key={index} src={diceImages[roll]} alt={`Dice roll: ${roll}`} style={{ width: '100px', height: '100px' }} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dieroller;