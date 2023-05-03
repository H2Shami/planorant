import React, { useState, useEffect } from 'react';

// Defining a class for the characters
class Character {
    constructor(name, duelist, controller, initiator, sentinel, path) {
        this.name = name;
        this.duelist = duelist;
        this.controller = controller;
        this.initiator = initiator;
        this.sentinel = sentinel;
        this.path = path;
    }
}

// Function component that renders the list of character buttons
const Characters = (props) => {
    const { characters } = props;

    // State to keep track of button states (clicked or not)
    const [buttonStates, setButtonStates] = useState(
        characters?.map(() => ({ clicked: false }))
    );

    // State to keep track of the number of clicked buttons
    const [clickedCount, setclickedCount] = useState(0);

    // Function to handle button click events
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

    // Array to hold names of selected characters
    const selectedButtons = buttonStates?.reduce((acc, curr, index) => {
        if (curr.clicked) {
            const character = characters[index];
            acc.push(character.name);
            if (character.duelist) {
                acc.push(` (Duelist)`);
            } else if (character.controller) {
                acc.push(` (Controller)`);
            } else if (character.initiator) {
                acc.push(` (Initiator)`);
            } else if (character.sentinel) {
                acc.push(` (Sentinel)`);
            }
        }
        return acc;
    }, []);

    // Render the component
    return (
        <div>
            {characters?.map((item, index) => (
                <button
                    key={index}
                    style={{
                        width: "5vw",
                        height: "5vw",
                        background: "white",
                        border: "black",
                        outline: "solid black",
                        cursor: "pointer",
                        margin: "0.5vw",
                        boxShadow: buttonStates[index].clicked
                            ? "0px 0px 10px 5px rgba(255,0,0,1)"
                            : "none"
                    }}
                    onClick={() => handleClick(index)}
                >
                    <img
                        src={item.path}
                        alt="Button image"
                        style={{ display: "block", margin: "auto", maxWidth: "100%", maxHeight: "100%" }}
                    />
                </button>
            ))}
            <div>
                Selected Characters: {selectedButtons?.join(", ")}
            </div>
        </div>
    );
};

// Exporting the Characters component as the default module
export default Characters;

