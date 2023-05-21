import React, { useState } from 'react';

// Function component that renders the list of character buttons
const Characters = ({ characters, onChange }) => {

    // State to keep track of button states (clicked or not)
    const [buttonStates, setButtonStates] = useState(
        characters?.map(() => ({ clicked: false }))
    );

    // State to keep track of the number of clicked buttons
    const [clickedCount, setClickedCount] = useState(0);

    // Function to handle button click events
    const handleClick = (index) => {
        const newButtonStates = [...buttonStates];
        const clicked = newButtonStates[index].clicked;
        //Only edit what's been clicked if elligible
        if (clickedCount < 5 || clicked) {
            newButtonStates[index] = {
                ...newButtonStates[index],
                clicked: !clicked
            };
            setClickedCount(clicked ? clickedCount - 1 : clickedCount + 1);
            setButtonStates(newButtonStates);
            let selectedCharacters = [];
            newButtonStates.forEach((buttonState, index) => {
                if (buttonState.clicked) {
                    const character = characters[index];
                    selectedCharacters.push(character);
                }
            });
            //Pass the selected characters to parent component
            onChange(selectedCharacters);
        }
    };

    // Array to hold names of selected characters
    const selectedButtons = buttonStates?.reduce((acc, curr, index) => {
        if (curr.clicked) {
            const character = characters[index];
            acc.push(character.name);
        }
        return acc;
    }, []);

    // Render the array of characters with an index to help state keep track of them
    return (
        <>
            <div>
            {characters?.map((item, index) => (
                <button
                    key={index}
                    style={{
                        width: "5vw",
                        height: "5vw",
                        background: "white",
                        border: "black",
                        cursor: "pointer",
                        margin: "0.5vw",
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
                        style={{
                            display: "block",
                            margin: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            background: `linear-gradient(to bottom, rgb(var(--background-start-rgb)), rgb(var(--background-mid-rgb)) 50%, rgb(var(--background-end-rgb)))`
                    }}
                    />
                </button>
            ))}
            </div>
        </>
    );
};

// Exporting the Characters component as the default module
export default Characters;

