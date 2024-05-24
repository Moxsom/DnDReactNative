import React, {useState, useEffect} from 'react';
import classData from '../../data/classes.json';

const Library = () => {

    //Testing if data was loaded. 
    //const bardData = classData.Bard; // Make sure bardData is loaded correctly.
    // Check data in console:
    //console.log(bardData);


    //Function to load Class data
    const [currentClassData, setClassData] = useState({});
    const [classSelected, setSelectedType] = useState('Bard');

    //useEffect to load data, only when the page is loaded or when the classSelected is changed.
    useEffect(() => {
        setClassData(classData[classSelected]);// Update the current class data based on selection
    }, [classSelected]); // Dependency array to trigger rerun when classSelected changes

    //function for formatting Class data into readable strings. Like proficiencies!!! 
    const formatProficiencies = (proficiencies) => {
        let result = [];
        if (proficiencies.armor) {
            result.push(`Armor: ${proficiencies.armor.join(', ')}`);
        }
        if (proficiencies.weapons) {
            result.push(`Weapons: ${proficiencies.weapons.join(', ')}`);
        }
        if (proficiencies.tools) {
            result.push(`Tools: ${proficiencies.tools}`);
        }
        if (proficiencies.savingThrows) {
            result.push(`Saving Throws: ${proficiencies.savingThrows.join(', ')}`);
        }
        if (proficiencies.skills) {
            result.push(`Skills: ${proficiencies.skills}`);
        }
        return result.join(' | ');
    };

    //formart Starting Equipment using .map() method ********* YOU ARE HERE! 
    const formatStartingEquipment = (equipment) => {
        return equipment.map((item, index) => {
            return <li key={index}>{item}</li>;
        });

    };
    

    return (
        <div>            
            <header className="header">
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
                        <li className="navbar-item"><a href="/library" className="navbar-link">Library</a></li>
                        <li className="navbar-item"><a href="/characters" className="navbar-link">Characters</a></li>
                        <li className="navbar-item"><a href="/dieroller" className="navbar-link">Dice Roller</a></li>
                    </ul>
                </nav>
            </header>
            
            <div>
                <button className="custom-button" onClick={() => setSelectedType('Bard')}>Bard</button>                
                <button className="custom-button" onClick={() => setSelectedType('Fighter')}>Fighter</button>
            </div>
            <div>
                     {currentClassData && (
                        <div>
                            <h2>{currentClassData.name}</h2>
                            <p>{currentClassData.description}</p>
                            <p>Base Hit Points: {currentClassData.baseHitPoints}  |  Hit Dice: {currentClassData.hitDice}</p>
                            <p>Proficiencies: {currentClassData.proficiencies ? formatProficiencies(currentClassData.proficiencies) : 'No proficiencies available'}</p>
                            <p>Starting Equipment: {currentClassData.formatStartingEquipment}  </p>
                            
                        </div>
                     )}
            </div>


        </div>
    );
};
export default Library;