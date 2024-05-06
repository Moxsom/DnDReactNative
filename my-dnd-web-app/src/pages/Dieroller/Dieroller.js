import React, { useState } from 'react';
import './Dieroller.css';

//d4 Image imports
import D401 from '../../assets/D4/D4-1.png';
import D402 from '../../assets/D4/D4-2.png';
import D403 from '../../assets/D4/D4-3.png';
import D404 from '../../assets/D4/D4-4.png';


// D6 Image imports
import D601 from '../../assets/D6/dice-six-faces-one.png';
import D602 from '../../assets/D6/dice-six-faces-two.png';
import D603 from '../../assets/D6/dice-six-faces-three.png';
import D604 from '../../assets/D6/dice-six-faces-four.png';
import D605 from '../../assets/D6/dice-six-faces-five.png';
import D606 from '../../assets/D6/dice-six-faces-six.png';

// D8 Image imports
import D801 from '../../assets/D8/D8-1.png';
import D802 from '../../assets/D8/D8-2.png';
import D803 from '../../assets/D8/D8-3.png';
import D804 from '../../assets/D8/D8-4.png';
import D805 from '../../assets/D8/D8-5.png';
import D806 from '../../assets/D8/D8-6.png';
import D807 from '../../assets/D8/D8-7.png';
import D808 from '../../assets/D8/D8-8.png';

// D10 Image imports
import D1001 from '../../assets/D10/D10-1.png';
import D1002 from '../../assets/D10/D10-2.png';
import D1003 from '../../assets/D10/D10-3.png';
import D1004 from '../../assets/D10/D10-4.png';
import D1005 from '../../assets/D10/D10-5.png';
import D1006 from '../../assets/D10/D10-6.png';
import D1007 from '../../assets/D10/D10-7.png';
import D1008 from '../../assets/D10/D10-8.png';
import D1009 from '../../assets/D10/D10-9.png';
import D1010 from '../../assets/D10/D10-10.png';


// d12 Image imports
import D1201 from '../../assets/D12/D12-1.png';
import D1202 from '../../assets/D12/D12-2.png';
import D1203 from '../../assets/D12/D12-3.png';
import D1204 from '../../assets/D12/D12-4.png';
import D1205 from '../../assets/D12/D12-5.png';
import D1206 from '../../assets/D12/D12-6.png';
import D1207 from '../../assets/D12/D12-7.png';
import D1208 from '../../assets/D12/D12-8.png';
import D1209 from '../../assets/D12/D12-9.png';
import D1210 from '../../assets/D12/D12-10.png';
import D1211 from '../../assets/D12/D12-11.png';
import D1212 from '../../assets/D12/D12-12.png';


// D20 Image imports
import D201 from '../../assets/D20/D20-1.png';
import D202 from '../../assets/D20/D20-2.png';
import D203 from '../../assets/D20/D20-3.png';
import D204 from '../../assets/D20/D20-4.png';
import D205 from '../../assets/D20/D20-5.png';
import D206 from '../../assets/D20/D20-6.png';
import D207 from '../../assets/D20/D20-7.png';
import D208 from '../../assets/D20/D20-8.png';
import D209 from '../../assets/D20/D20-9.png';
import D2010 from '../../assets/D20/D20-10.png';
import D2011 from '../../assets/D20/D20-11.png';
import D2012 from '../../assets/D20/D20-12.png';
import D2013 from '../../assets/D20/D20-13.png';
import D2014 from '../../assets/D20/D20-14.png';
import D2015 from '../../assets/D20/D20-15.png';
import D2016 from '../../assets/D20/D20-16.png';
import D2017 from '../../assets/D20/D20-17.png';
import D2018 from '../../assets/D20/D20-18.png';
import D2019 from '../../assets/D20/D20-19.png';
import D2020 from '../../assets/D20/D20-20.png';


const diceImages = {
    d4: {
        1: D401,
        2: D402,
        3: D403,
        4: D404
    },
    d6: {
        1: D601,
        2: D602,
        3: D603,
        4: D604,
        5: D605,
        6: D606
    },
    d8: {
        1: D801,
        2: D802,
        3: D803,
        4: D804,
        5: D805,
        6: D806,
        7: D807,
        8: D808
    },
    d10: {
        1: D1001,
        2: D1002,
        3: D1003,
        4: D1004,
        5: D1005,
        6: D1006,
        7: D1007,
        8: D1008,
        9: D1009,
        10: D1010
    },
    d12: {
        1: D1201,
        2: D1202,
        3: D1203,
        4: D1204,
        5: D1205,
        6: D1206,
        7: D1207,
        8: D1208,
        9: D1209,
        10: D1210,
        11: D1211,
        12: D1212
    },
    d20: {
        1: D201,
        2: D202,
        3: D203,
        4: D204,
        5: D205,
        6: D206,
        7: D207,
        8: D208,
        9: D209,
        10: D2010,
        11: D2011,
        12: D2012,
        13: D2013,
        14: D2014,
        15: D2015,
        16: D2016,
        17: D2017,
        18: D2018,
        19: D2019,
        20: D2020
    }
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
    const [modiferNumber, setModifierNumber] = useState(0);

    const rollDice = () => {
        const diceMax = diceTypes[selectedDice];
        const newRolls = Array.from({ length: numberOfDice }, () => Math.floor(Math.random() * diceMax) + 1);
        setRolls(newRolls);
    };

    const diceSumTotal = () => {
        return rolls.reduce((acc, curr) => acc + curr, 0) + modiferNumber; // Use reduce for a more concise and functional approach
    };

    return (
        <>
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
            <div className="dieroller-container">
                <div className="card">
                    <div className="controls">
                        <label htmlFor="diceType">Choose a dice type:</label>
                        <select id="diceType" value={selectedDice} onChange={(e) => setSelectedDice(e.target.value)}>
                            {Object.keys(diceTypes).map((type) => (
                                <option key={type} value={type}>{type.toUpperCase()}</option>
                            ))}
                        </select>
                        <label htmlFor="numDice">Number of Dice:</label>
                        <input type="number" id="numDice" value={numberOfDice} min="1" onChange={(e) => setNumberOfDice(parseInt(e.target.value, 10))} />
                        <label htmlFor='Modifier'>Modifier:</label>
                        <input type="number" id="modiferNumber" value={modiferNumber} onChange={(e) => setModifierNumber(parseInt(e.target.value, 10))} /> {/* Modifier input field */}
                        <button onClick={rollDice}>Roll Dice</button>
                    </div>
                </div>
                {rolls.length > 0 && (
                    <div className="card results-card">
                        <p>Total: {diceSumTotal()}</p>
                        <div className="dice-images">
                            {rolls.map((roll, index) => {
                                const imageSrc = diceImages[selectedDice] && diceImages[selectedDice][roll];
                                return (
                                    imageSrc ? <img key={index} src={imageSrc} alt={`Dice roll: ${roll}`} style={{ width: '100px', height: '100px' }} /> : <p key={index}>Image not found</p>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Dieroller;

