
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
          "/Strategies/DAscent1.png",
          "/Strategies/DAscent2.png",
          "/Strategies/IAscent1.png",
          "/Strategies/IAscent2.png",
        ];
        break;
      case "Pearl":
        images = [
          "/Strategies/DHaven1.png",
          "/Strategies/DHaven2.png",
          "/Strategies/IHaven1.png",
          "/Strategies/IHaven2.png",
        ];
        break;
        case "Haven":
          images = [
            "/Strategies/DPearl1.png",
            "/Strategies/DPearl2.png",
            "/Strategies/IPearl1.png",
            "/Strategies/IPearl2.png",
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
