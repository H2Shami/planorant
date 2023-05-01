import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react';
import getCharacters from './model.js';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Planorant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Planorant_Logo.ico" />
      </Head>
      <main className={styles.main}>
          <container style={{display: 'grid', gridTemplateColumns: '18vw 45vw 30vw'}}>
          <grid>
              <CharacterRoster/>
          </grid>
              <container>{AscentStrats()}</container>
              <grid>
                  <MapRoster/>
              </grid>
      </container>
          </main>
    </>
  )
}

//This function renders the list of character buttons
//Toggles between on and off, allowing a maximum selection of 5
function CharacterRoster() {

    //This function will eventually be changed to access the database to get the list of characters
    function getCharacters() {
        let characters;
        characters = [
            "/Character Icons/astra.png",
            "/Character Icons/breach.png",
            "/Character Icons/brimstone.png",
            "/Character Icons/Chamber.webp",
            "/Character Icons/cypher.png",
            "/Character Icons/fade.png",
            "/Character Icons/Gekko.webp",
            "/Character Icons/jett.webp",
            "/Character Icons/kayo.png",
            "/Character Icons/killjoy.png",
            "/Character Icons/neon.webp",
            "/Character Icons/omen.png",
            "/Character Icons/phoenix.png",
            "/Character Icons/raze.png",
            "/Character Icons/reyna.png",
            "/Character Icons/sage.png",
            "/Character Icons/skye.png",
            "/Character Icons/sova.png",
            "/Character Icons/viper.png",
            "/Character Icons/wave.png",
            "/Character Icons/yoru.png",
        ];
        return characters;
    }

    //Grab the characters
    const urls = getCharacters();

    const [buttonStates, setButtonStates] = useState(
        urls.map(() => ({ clicked: false, disabled: false }))
    );

    const [clickedCount, setClickedCount] = useState(0);

    const handleClick = (index) => {
        const newButtonStates = [...buttonStates];
        const clicked = newButtonStates[index].clicked;
        if (clickedCount < 5 || clicked) {
            newButtonStates[index] = {
                ...newButtonStates[index],
                clicked: !clicked
            };
            setClickedCount(clicked ? clickedCount - 1 : clickedCount + 1);
            setButtonStates(newButtonStates);

            // check if 5 buttons are clicked
            if (clickedCount === 4 && !clicked) {
                console.log("character limit reached");
                // disable the buttons that are not clicked
                const disabledButtons = newButtonStates.map((buttonState) =>
                    buttonState.clicked ? { ...buttonState } : { ...buttonState, disabled: true }
                );
                setButtonStates(disabledButtons);
            }
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
                        width: '5vw',
                        height: '5vw',
                        background: 'white',
                        border: 'black',
                        outline: 'solid black',
                        cursor: 'pointer',
                        margin: '0.5vw',
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
                Selected Characters: {selectedButtons.join(", ")}
            </div>
        </div>
    );
}

function MapRoster() {

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
                        background: 'white',
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

// function MyCarousel() {
//     const customPrevArrow = (onClickHandler, hasPrev, label) => {
//         return (
//             hasPrev && (
//                 <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '50%', left: '5%', backgroundColor: 'transparent', borderRadius: '50%', border: 'none', outline: 'none', cursor: 'pointer', transform: 'translate(-50%,-50%)', padding: '10px' }}>
//                     <span style={{ fontSize: '2rem' }}>&lt;</span>
//                     <span style={{ fontSize: '1rem', marginLeft: '5px' }}>Prev</span>
//                 </button>
//             )
//         );
//     };
//
//     const customNextArrow = (onClickHandler, hasNext, label) => {
//         return (
//             hasNext && (
//                 <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '50%', right: '5%', backgroundColor: 'transparent', borderRadius: '25%', border: 'none', outline: 'none', cursor: 'pointer', transform: 'translate(50%,-50%)', padding: '10px' }}>
//                     <span style={{ fontSize: '2rem' }}>&gt;</span>
//                     <span style={{ fontSize: '1rem', marginLeft: '5px' }}>Next</span>
//                 </button>
//             )
//         );
//     };
//
//     return (
//         <Carousel
//             renderArrowPrev={customPrevArrow}
//             renderArrowNext={customNextArrow}
//             showThumbs={false}
//         >
//             <div>
//                 <MarketSplit />
//             </div>
//             <div>
//                 <img src="/Map Icons/Icebox.webp" alt="Slide 2" />
//             </div>
//             <div>
//                 <img src="/Map Icons/Lotus.webp" alt="Slide 3" />
//             </div>
//         </Carousel>
//     );
// }

const agents = {
    omen: {
        name: 'omen',
        image: '/Character Icons/omen.png',
        abilities: [
            {
                name: 'smoke',
                image: "/Ability%20Icons/dark-cover-black.png"
            },
            // ...
        ]
    },
    brim:{
        name: 'brimstone',
        image: '/Character Icons/brimstone.png',
        abilities: [
            {
                name: 'smoke',
                image: "/Ability%20Icons/brim.png"
            }
        ]
    }
    // other agents here...
};


function AscentStrats() {
    function MarketSplit() {
        const [image1Position, setImage1Position] = useState({ x: 0, y: 0 });
        const [image2Position, setImage2Position] = useState({ x:-140, y: 90 });
        const [image3Position, setImage3Position] = useState({ x: 80, y: 320 });
        const [image4Position, setImage4Position] = useState({ x: -100, y: 380 });

        useEffect(() => {
            function handleResize() {
                const image1 = document.getElementById('image1');
                const image2 = document.getElementById('image2');
                const image3 = document.getElementById('image3');
                const container = document.getElementById('container');
                const containerRect = container.getBoundingClientRect();
                const scalingFactor = container.offsetWidth / containerRect.width;
                const image1Rect = image1.getBoundingClientRect();
                const image2Rect = image2.getBoundingClientRect();
                const image3Rect = image3.getBoundingClientRect();
                setImage1Position({
                    x: image1Rect.left * scalingFactor,
                    y: image1Rect.top * scalingFactor,
                });
                setImage2Position({
                    x: (image2Rect.left - image1Rect.left) * scalingFactor,
                    y: (image2Rect.top - image1Rect.top) * scalingFactor,
                });
                setImage3Position({
                    x: (image3Rect.left - image1Rect.left) * scalingFactor,
                    y: (image3Rect.top - image1Rect.top) * scalingFactor,
                });
            }

            handleResize();

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return (
            <div id="container" className="image-container">
                <img
                    id="image1"
                    src="/MiniMap Icons/Ascent.png"
                    alt="image1"
                    style={{ position: 'relative' }}
                />
                <img
                    id="image2"
                    src={agents.brim.abilities[0].image}
                    alt="smokes"
                    style={{
                        position: 'absolute',
                        top: image1Position.y + image2Position.y,
                        left: image1Position.x + image2Position.x,
                        zIndex: 1,
                        width: '50px',
                        height: '50px',
                    }}
                />
                <img
                    id="image3"
                    src={agents.brim.abilities[0].image}
                    alt="image3"
                    style={{
                        position: 'absolute',
                        top: image1Position.y + image3Position.y,
                        left: image1Position.x + image3Position.x,
                        zIndex: 1,
                        width: '50px',
                        height: '50px',
                    }}
                />
                <img
                    id="image4"
                    src={agents.brim.image}
                    alt="image4"
                    style={{
                        position: 'absolute',
                        top: image1Position.y + image4Position.y,
                        left: image1Position.x + image4Position.x,
                        zIndex: 1,
                        width: '50px',
                        height: '50px',
                    }}
                />
            </div>
        );
    }

    const customPrevArrow = (onClickHandler, hasPrev, label) => {
        return (
            hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '50%', left: '5%', backgroundColor: 'transparent', borderRadius: '50%', border: 'none', outline: 'none', cursor: 'pointer', transform: 'translate(-50%,-50%)', padding: '10px' }}>
                    <span style={{ fontSize: '2rem' }}>&lt;</span>
                    <span style={{ fontSize: '1rem', marginLeft: '5px' }}>Prev</span>
                </button>
            )
        );
    };

    const customNextArrow = (onClickHandler, hasNext, label) => {
        return (
            hasNext && (
                <button type="button" onClick={onClickHandler} title={label} style={{ position: 'absolute', zIndex: 2, top: '50%', right: '5%', backgroundColor: 'transparent', borderRadius: '25%', border: 'none', outline: 'none', cursor: 'pointer', transform: 'translate(50%,-50%)', padding: '10px' }}>
                    <span style={{ fontSize: '2rem' }}>&gt;</span>
                    <span style={{ fontSize: '1rem', marginLeft: '5px' }}>Next</span>
                </button>
            )
        );
    };
    return (
        <Carousel
            renderArrowPrev={customPrevArrow}
            renderArrowNext={customNextArrow}
            showThumbs={false}
        >
            <div>
                <MarketSplit />
            </div>
            <div>
                <img src="/Strategies/Ascent/Strat1/Duelist/brim;raze;jett;sova;killjoy.png" alt="Slide 2" />
            </div>
            <div>
                <img src="/Map Icons/Lotus.webp" alt="Slide 3" />
            </div>
        </Carousel>
    );
}



