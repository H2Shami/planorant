import React, { useState } from 'react';

const Maps = ({maps, onChange}) => {

    const [buttonStates, setButtonStates] = useState(
        maps.map(() => ({ clicked: false }))
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
            onChange(clicked ? '' : maps[index].name);
        }
    };

    const selectedButtons = buttonStates.reduce((acc, curr, index) => {
        if (curr.clicked) {
            acc.push(maps[index].name);
        }
        return acc;
    }, []);

    return (
        <div>
            {maps.map((item, index) => (
                <button
                    key={index}
                    style={{
                        width: '12.5vw',
                        height: '7vw',
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