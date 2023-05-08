import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {getIcons} from '@/model.js';
import {getMapImages} from '@/model.js';


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
    for (const role in rolesCount) {
        if (rolesCount[role] > 2) {
            alert(`Poor team composition: Recommended two characters per role`);
            break;
        }
    }

    //Grab the amount of selected characters from the json
    let totalCharacters = Object.keys(selectedCharacters).length;
    const mapImages = getMapImages(selectedMap);
    return (
        <>
            {totalCharacters === 5 ? (
                selectedMap == ""?(
                    <div>
                        <img src="/Planorant_Logo.png" alt="Slide 1" />
                        <p>Characters: {selectedCharactersString}</p>
                        <p>Map: {selectedMap}</p>
                    </div>                    
                ):(
                <Carousel renderArrowPrev={customPrevArrow} renderArrowNext={customNextArrow} showThumbs={true}>
                    {mapImages.map((image,index) =>(
                        <div key={index}>
                            <img src={image} alt={'Slide ${index + 1}'} />
                        </div>
                    ))}
                </Carousel>
                )                           
            ) : (
                    <div>
                        <img src="/Planorant_Logo.png" alt="Slide 1" />
                        <p>Characters: {selectedCharactersString}</p>
                        <p>Map: {selectedMap}</p>
                    </div>
            )}
        </>
    );
}

export default Strategies;