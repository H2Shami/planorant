
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

export const getIcons = () =>{
    let icons;

    icons = [
        "/Map Icons/valoleft.svg",
        "/Map Icons/valoright.svg",
    ];
    return icons;
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
