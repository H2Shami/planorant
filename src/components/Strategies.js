import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {getIcons} from '@/model.js';


const Strategies = ({clickedCount}) => {

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


    return (
        <>
            {clickedCount === 5 ? (
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
                    <div>
                        <img src="/Planorant_Logo.png" alt="Slide 1" />
                    </div>
            )}
        </>
    );
}

export default Strategies;