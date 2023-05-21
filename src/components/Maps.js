import React, { useState } from 'react';

const Maps = ({maps, onChange}) => {
    //State variables to see which maps are clicked
    const [buttonStates, setButtonStates] = useState(
        maps.map(() => ({ clicked: false }))
    );

    const [clickedCount, setclickedCount] = useState(0);

    const handleClick = (index) => {
        const newButtonStates = [...buttonStates];
        const clicked = newButtonStates[index].clicked;
        //Only edit the state if elligible
        if (clickedCount < 1 || clicked) {
            newButtonStates[index] = {
                ...newButtonStates[index],
                clicked: !clicked
            };
            //increment clicked count accordingly
            setclickedCount(clicked ? clickedCount - 1 : clickedCount + 1);
            setButtonStates(newButtonStates);
            //pass clicked map name to parent component
            onChange(clicked ? '' : maps[index].name);
        }
    };

    //Find out which of our maps is clicked so we can display the name
    const selectedButtons = buttonStates.reduce((acc, curr, index) => {
        if (curr.clicked) {
            acc.push(maps[index].name);
        }
        return acc;
    }, []);

    //Render the array of maps and give them an index to help our state
    return (
        <div style={{ textAlign: 'center' }}>
            {maps.map((item, index) => (
                <button
                    key={index}
                    style={{
                        width: '12.5vw',
                        height: '7vw',
                        background: 'black',
                        border: 'black',
                        cursor: 'pointer',
                        margin: '0.25vw',
                        boxShadow: buttonStates[index].clicked
                            ? "0px 0px 10px 5px rgba(255,0,0,1)"
                            : "none",
                        animation: buttonStates[index].clicked
                            ? "color-wave 0.5s ease-in-out, pulse 6s infinite"
                            : "none"
                    }}
                    onClick={() => handleClick(index)}
                >
                    <img
                        src={item.path}
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