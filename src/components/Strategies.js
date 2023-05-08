import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {getIcons} from '@/model.js';



const Strategies = ({selectedCharacters, selectedMap}) => {

    const icons = getIcons();
    const customPrevArrow = (onClickHandler, hasPrev, label) => {
        return (
            hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '50%', left: '5%', backgroundColor: 'transparent', borderRadius: '50%', border: 'none', outline: 'none', cursor: 'pointer', transform: 'translate(-50%,-50%)', padding: '10px' }}>
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
          <img src={getIcons()[0]} alt="Previous Icon" />
        </span>
                    <span
                        style={{
                            fontSize: '1rem',
                            marginLeft: '5px',
                            backgroundColor: 'none',
                        }}
                    >

        </span>
                </button>
            )
        );
    };

    const customNextArrow = (onClickHandler, hasNext, label) => {
        return (
            hasNext && (
                <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '50%', right: '5%', backgroundColor: 'transparent', borderRadius: '25%', border: 'none', outline: 'none', cursor: 'pointer', transform: 'translate(50%,-50%)', padding: '10px' }}>
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
          <img src={getIcons()[1]} alt="Next Icon" />
        </span>
                    <span
                        style={{
                            fontSize: '1rem',
                            marginLeft: '5px',
                            backgroundColor: 'none',
                        }}
                    >

        </span>
                </button>
            )
        );
    };

    const [showWarning, setShowWarning] = useState(false);

    const rolesCount = {
        duelist: 0,
        controller: 0,
        initiator: 0,
        sentinel: 0
    };
    let selectedCharactersString = '';
    for (let character in selectedCharacters) {
        selectedCharactersString += `${selectedCharacters[character].name} `;
        if (selectedCharacters[character].duelist) rolesCount.duelist++;
        if (selectedCharacters[character].controller) rolesCount.controller++;
        if (selectedCharacters[character].initiator) rolesCount.initiator++;
        if (selectedCharacters[character].sentinel) rolesCount.sentinel++;
    }

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

    //Grab the amount of selected characters from the json
    let totalCharacters = Object.keys(selectedCharacters).length;

    return (
        <>
            {totalCharacters === 5 && selectedMap.length > 0? (
                <Carousel
                    renderArrowPrev={customPrevArrow}
                    renderArrowNext={customNextArrow}
                    showThumbs={true}
                >
                <Carousel renderArrowPrev={customPrevArrow} renderArrowNext={customNextArrow} showThumbs={true}>
                    <div>
                        <img src="/Map Icons/Haven.webp" alt="Slide 1" />
                    </div>
                    <div>
                        <img src="/Map Icons/Icebox.webp" alt="Slide 2" />
                    </div>
                    <div>
                        <img src="/Map Icons/Lotus.webp" alt="Slide 3" />
                    </div>

                </Carousel>
                </Carousel>
            ) : (
                <div style={{
                    border: '1px solid black',
                    padding: '5px',
                    boxShadow: ' 5px 5px 10px 1px #000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50%',
                    background: 'linear-gradient(\n' +
                        '      to bottom,\n' +
                        '      rgb(var(--background-start-rgb)),\n' +
                        '      rgb(var(--background-end-rgb))\n' +
                        '    )\n' +
                        '    rgb(var(--background-start-rgb))',
                    zIndex: 1}}>
                    <p>
                        {totalCharacters < 5 ?
                            `Select ${5 - totalCharacters} more character${5 - totalCharacters !== 1 ? 's' : ''} to proceed` :
                            'Character selection complete'}
                    </p>

                    <p>
                        {selectedMap.length === 0 ?
                            'Please select a map':
                            'You have selected: ' + selectedMap }
                    </p>
                    {showWarning &&
                        <p style={{color: 'red'}}>
                        Poor team composition: Recommended two characters per role
                        </p>}
                </div>
            )}
        </>
    );
}

export default Strategies;