import React, { useState, useEffect } from 'react';
import getCharacters from '@/model.js';

const Maps = () => {

    //This function will eventually be changed to access the database to get the list of characters
    function getMaps() {
        let maps;
        maps = [
            "/Map Icons/Ascent.webp",
            "/Map Icons/Fracture.webp",
            "/Map Icons/Haven.webp",
            "/Map Icons/Icebox.webp",
            "/Map Icons/Lotus.webp",
            "/Map Icons/Pearl.avif",
            "/Map Icons/Split.jpeg",
        ];
        return maps;
    }

    //Grab the characters
    const urls = getMaps();

    const [buttonStates, setButtonStates] = useState(
        urls.map(() => ({ clicked: false }))
    );

    const [clickedCount, setclickedCount] = useState(0);

    const handleClick = (index) => {
        const newButtonStates = [...buttonStates];
        const clicked = newButtonStates[index].clicked;
        if (clickedCount < 1 || clicked) {
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
                        width: '14vw',
                        height: '8vw',
                        background: 'black',
                        border: 'black',
                        outline: 'solid black',
                        cursor: 'pointer',
                        margin: '0.25vw',
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
                Selected Maps: {selectedButtons.join(", ")}
            </div>
        </div>
    );
}

export default Maps;