import React, { useState, useEffect } from 'react';
import getCharacters from '@/model.js';

//This function renders the list of character buttons
//Toggles between on and off, allowing a maximum selection of 5
const Characters = () => {


    //Grab the characters
    const urls = getCharacters();

    const [buttonStates, setButtonStates] = useState(
        urls.map(() => ({ clicked: false }))
    );

    const [clickedCount, setclickedCount] = useState(0);

    const handleClick = (index) => {
        const newButtonStates = [...buttonStates];
        const clicked = newButtonStates[index].clicked;
        if (clickedCount < 5 || clicked) {
            newButtonStates[index] = {
                ...newButtonStates[index],
                clicked: !clicked
            };
            setclickedCount(clicked ? clickedCount - 1 : clickedCount + 1);
            setButtonStates(newButtonStates);
        }
    };

    const selectedButtons = buttonStates.reduce((acc, curr, index) => {
        if (curr.clicked) {
            acc.push(urls[index]);
        }
        return acc;
    }, []);

    return (
        <div>
            {urls.map((item, index) => (
                <button
                    key={index}
                    style={{
                        width: '5vw',
                        height: '5vw',
                        background: 'white',
                        border: 'black',
                        outline: 'solid black',
                        cursor: 'pointer',
                        margin: '0.5vw',
                        boxShadow: buttonStates[index].clicked ? '0px 0px 10px 5px rgba(255,0,0,1)' : 'none',
                    }}
                    onClick={() => handleClick(index)}
                >
                    <img
                        src={item}
                        alt="Button image"
                        style={{ display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                    />
                </button>
            ))}
            <div>
                Selected Characters: {selectedButtons.join(", ")}
            </div>
        </div>
    );
}

export default Characters;