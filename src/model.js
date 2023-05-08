
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

export const getMapImages = (mapName) => {
    let images = [];
    switch (mapName) {
      case "Ascent":
        images = [
          "/Strategies/Ascent_A_Split.png",
          "/Strategies/Ascent_A_Split_2.png",
          "/Strategies/Ascent_B_Split.png",
        ];
        break;
      case "Pearl":
        images = [
          "/Strategies/Pearl_A_Split.png",
          "/Strategies/Pearl_Mid_Split.png",
          "/Strategies/Pearl_B_Split.png",
        ];
        break;
      default:
        break;
    }
    return images;
  };
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
