import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Component for displaying strategies
const Strategies = ({ selectedCharacters, selectedMap, selectedStrat }) => {
    // Custom previous arrow component for Carousel
    const customPrevArrow = (onClickHandler, hasPrev, label) => {
        return (
            hasPrev && (
                <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '50%',
                        left: '5%',
                        backgroundColor: 'transparent',
                        borderRadius: '50%',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        transform: 'translate(-50%,-50%)',
                        padding: '10px'
                    }}
                >
                    <span
                        style={{
                            fontSize: '2rem',
                            backgroundColor: 'none',
                            width: '50px', // Set the width to adjust the size of the icon
                            height: '50px', // Set the height to adjust the size of the icon
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img src={"/valoleft.svg"} alt="Prev Icon" />
                    </span>
                    <span
                        style={{
                            fontSize: '1rem',
                            marginLeft: '5px',
                            backgroundColor: 'none',
                        }}
                    ></span>
                </button>
            )
        );
    };

    // Custom next arrow component for Carousel
    const customNextArrow = (onClickHandler, hasNext, label) => {
        return (
            hasNext && (
                <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '50%',
                        right: '5%',
                        backgroundColor: 'transparent',
                        borderRadius: '25%',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                        transform: 'translate(50%,-50%)',
                        padding: '10px'
                    }}
                >
                    <span
                        style={{
                            fontSize: '2rem',
                            backgroundColor: 'none',
                            width: '50px', // Set the width to adjust the size of the icon
                            height: '50px', // Set the height to adjust the size of the icon
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img src={"/valoright.svg"} alt="Next Icon" />
                    </span>
                    <span
                        style={{
                            fontSize: '1rem',
                            marginLeft: '5px',
                            backgroundColor: 'none',
                        }}
                    ></span>
                </button>
            )
        );
    };

    // State variable to keep track of warning boolean
    const [showWarning, setShowWarning] = useState(false);

    // Object to keep track of the number of characters selected per role
    const rolesCount = {
        duelist: 0,
        controller: 0,
        initiator: 0,
        sentinel: 0
    };

    let selectedCharactersString = '';

    // Store selectedCharacters' names in a string and increment rolesCount
    for (let character in selectedCharacters) {
        selectedCharactersString += `${selectedCharacters[character].name} `;
        if (selectedCharacters[character].duelist) rolesCount.duelist++;
        if (selectedCharacters[character].controller) rolesCount.controller++;
        if (selectedCharacters[character].initiator) rolesCount.initiator++;
        if (selectedCharacters[character].sentinel) rolesCount.sentinel++;
    }

    // Sets hasExceededRoleLimit variable to true when rolesCount > 2
    useEffect(() => {
        let hasExceededRoleLimit = false;
        for (const role in rolesCount) {
            if (rolesCount[role] > 2) {
                hasExceededRoleLimit = true;
                break;
            }
        }
        setShowWarning(hasExceededRoleLimit);
    }, [selectedCharacters]);

    // Grab the amount of selected characters from the json
    let totalCharacters = Object.keys(selectedCharacters).length;

    let desiredStrat = [];
    function validStrat() {
        let retval = [];
        for (let strats in selectedStrat) {
            let temp = [];
            if (selectedMap === selectedStrat[strats].map) {
                temp.push(selectedStrat[strats].character1);
                temp.push(selectedStrat[strats].character2);
                temp.push(selectedStrat[strats].character3);
                temp.push(selectedStrat[strats].character4);
                temp.push(selectedStrat[strats].character5);
                retval.push(selectedStrat[strats]);

                for (let character in selectedCharacters) {
                    if (temp.includes(selectedCharacters[character].name) === false) {
                        retval.pop();
                    }
                }
            }
        }
        desiredStrat.splice(0, retval.length, ...retval);
        return true;
    }

    return (
        <>
            {/* Conditionally render strategies or display selection instructions */}
            {totalCharacters === 5 && selectedMap.length > 0 ? (
                <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                    <div style={{ flex: '3', marginRight: '20px' }}>
                        {/* If valid strategies exist, render Carousel */}
                        {validStrat() && desiredStrat.length > 0 ? (
                            <Carousel
                                renderArrowPrev={customPrevArrow}
                                renderArrowNext={customNextArrow}
                                showThumbs={true}
                            >
                                {desiredStrat.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: 'flex',
                                        }}
                                    >
                                        <div style={{ width: '70%', height: '100%', padding: '10px' }}>
                                            <img
                                                src={item.path}
                                                alt={`Slide ${index + 1}`}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div
                                            style={{
                                                flex: '1',
                                                backgroundColor: 'black',
                                                padding: '10px',
                                                border: '2px solid white',
                                                borderRadius: '10px',
                                                height: '100%',
                                                overflow: 'auto', // Enable scrollbars if necessary
                                            }}
                                        >
                                            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Explanations</h2>
                                            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{item.explanation}</p>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        ) : (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '10px',
                                    padding: '10px',
                                }}
                            >
                                <p style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>In Development</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Display selection instructions */}
                    <div>
                        <img src={'/Planorant_Logo.png'} alt="" style={{ display: 'flex', maxWidth: '100%', maxHeight: '100%' }} />
                    </div>
                    <div
                        style={{
                            border: '1px solid black',
                            padding: '5px',
                            boxShadow: '5px 5px 10px 1px #000',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '50%',
                            background: 'linear-gradient(to bottom, rgb(var(--background-start-rgb)), rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))',
                        }}
                    >
                        <p style={{ fontSize: '1.5em', color: 'Chartreuse' }}>To receive strategy:</p>
                        <p style={{ fontSize: '1.5em' }}>
                            {totalCharacters < 5
                                ? `Select ${5 - totalCharacters} more character${5 - totalCharacters !== 1 ? 's' : ''} to proceed`
                                : <span style={{ color: 'Chartreuse' }}>Character selection complete</span>}
                        </p>
                        <p style={{ fontSize: '1.5em' }}>
                            {selectedMap.length === 0
                                ? 'Please select a map'
                                : <span style={{ color: 'Chartreuse' }}>You have selected: {selectedMap}</span>}
                        </p>
                        {/* Display warning if team composition is poor */}
                        {showWarning && (
                            <p style={{ color: 'red', alignItems: 'center', textAlign: 'center', fontWeight: 'bold' }}>
                                Poor team composition: Recommended two characters per role
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Strategies;
