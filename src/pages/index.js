import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
import React, { useState } from 'react';
import getCharacters from './model.js';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

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
              <container></container>
              <grid>
                  <PNGButton url = {"/Map Icons/Ascent.webp"} char = {false}/>
                  <PNGButton url = {"/Map Icons/Fracture.webp"} char = {false}/>
                  <PNGButton url = {"/Map Icons/Haven.webp"} char = {false}/>
                  <PNGButton url = {"/Map Icons/Icebox.webp"} char = {false}/>
                  <PNGButton url = {"/Map Icons/Lotus.webp"} char = {false}/>
                  <PNGButton url = {"/Map Icons/Pearl.avif"} char = {false}/>
                  <PNGButton url = {"/Map Icons/Split.jpeg"} char = {false}/>
              </grid>
      </container>
          </main>
    </>
  )
}


function PNGButton (props) {
    const [clicked, setClick] = useState(false);

    const handleClick = () => {
        setClick(!clicked);
    };

    return (
        <button
            style={{
                width: props.char ? '5vw' : '14vw',
                height: props.char ? '5vw' : '8vw',
                background: 'darkslategray',
                border: 'black',
                outline: 'solid black',
                cursor: 'pointer',
                margin: '0.5vw',
                boxShadow: clicked ? '0px 0px 10px 5px rgba(255,0,0,1)' : 'none'
            }}
            onClick={handleClick}
        >
            <img
                src={props.url}
                alt="Button image"
                style={{ display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>
    );
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
            "/Character Icons/cypher.png",
            "/Character Icons/fade.png",
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
        urls.map(() => ({ clicked: false }))
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

    return (
        <div>
            {urls.map((item, index) => (
                <button
                    key={index}
                    style={{
                        width: '5vw',
                        height: '5vw',
                        background: 'darkslategray',
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
        </div>
    );
}

