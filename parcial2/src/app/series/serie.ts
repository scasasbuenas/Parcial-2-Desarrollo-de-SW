

export class Serie {
    id: number;
    name: string;
    description: string;
    Rating: string;
    episode: number;
    categorie: string;
    studio: string;
    img: string;

    constructor(id: number, name: string, description: string, Rating: string, episode: number, categorie: string, studio: string, img: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.Rating = Rating;
        this.episode = episode;
        this.categorie = categorie;
        this.studio = studio;
        this.img = img;
    }
}

/**
 *      "id": 1,
        "name": "Naruto: Shippuuden",
        "description": "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
        "Rating": "8.16",
        "episode": 500,
        "categorie": "Animation | Drama | Adventure",
        "studio": "Studio Pierrot",
        "img": "https://raw.githubusercontent.com/VivianGomez/ImagenesParcialDSE/main/1.png"
 */
