import React, { useState, useEffect } from 'react';
import { getCharacters, fetchCharacters } from '@/model.js';

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

//This function renders the list of character buttons
//Toggles between on and off, allowing a maximum selection of 5
const Characters = (props) => {
    const { characters } = props;

    const [buttonStates, setButtonStates] = useState(
        characters?.map(() => ({ clicked: false }))
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

    const selectedButtons = buttonStates?.reduce((acc, curr, index) => {
        if (curr.clicked) {
            const character = characters[index];
            if (character.duelist) {
                acc.push(`${character.name} (Duelist)`);
            } else if (character.controller) {
                acc.push(`${character.name} (Controller)`);
            } else if (character.initiator) {
                acc.push(`${character.name} (Initiator)`);
            } else if (character.sentinel) {
                acc.push(`${character.name} (Sentinel)`);
            } else {
                acc.push(character.name);
            }
        }
        return acc;
    }, []);

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

export default Characters;

