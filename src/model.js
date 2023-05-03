import { PrismaClient } from "@prisma/client";


//This function will eventually be changed to access the database to get the list of characters
export const getCharacters = () => {
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

export const fetchCharacters = async () => {
    const prisma = new PrismaClient();
    const allCharacters = await prisma.Character.findMany();
    console.log("database:\n" + allCharacters);
    return allCharacters;
}

//This function will eventually be changed to access the database to get the list of characters
export const getMaps = () => {
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

// // pages/api/users.js
// import pool from './db';
//
// export default async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM users');
//         res.status(200).json(result.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };
