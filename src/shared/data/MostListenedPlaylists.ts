import { MostListenedPlaylistsImages } from "../assets/playlist";
import { iPlaylist } from "../interfaces/iPlaylists";
import { v4 as uuidv4 } from 'uuid';

export const MostListenedPlaylistsData: iPlaylist[] = [
    {
        id: uuidv4(),
        nome: "Boas festas",
        foto: MostListenedPlaylistsImages.foto1,
        alt: "Boas festas"
    },
    {
        id: uuidv4(),
        nome: "Feitos para você",
        foto: MostListenedPlaylistsImages.foto2,
        alt: "Feitos para você"
    },
    {
        id: uuidv4(),
        nome: "Lançamentos",
        foto: MostListenedPlaylistsImages.foto3,
        alt: "Lançamentos"
    },
    {
        id: uuidv4(),
        nome: "Rock",
        foto: MostListenedPlaylistsImages.foto11,
        alt: "Rock"
    },
    {
        id: uuidv4(),
        nome: "Para treinar",
        foto: MostListenedPlaylistsImages.foto5,
        alt: "Para treinar"
    },
    {
        id: uuidv4(),
        nome: "Podcasts",
        foto: MostListenedPlaylistsImages.foto6,
        alt: "Podcasts"
    }
    ,
    // {
    //     id: uuidv4(),
    //     nome: "Sertanejo",
    //     foto: HomePlaylistsImages.foto7,
    //     alt: "Sertanejo"
    // },
    // {
    //     id: uuidv4(),
    //     nome: "Samba e pagode",
    //     foto: HomePlaylistsImages.foto8,
    //     alt: "Samba e pagode"
    // },
    // {
    //     id: uuidv4(),
    //     nome: "Funk",
    //     foto: HomePlaylistsImages.foto9,
    //     alt: "Funk"
    // },
    // {
    //     id: uuidv4(),
    //     nome: "MPB",
    //     foto: HomePlaylistsImages.foto10,
    //     alt: "MPB"
    // },
    // {
    //     id: uuidv4(),
    //     nome: "Rock",
    //     foto: HomePlaylistsImages.foto11,
    //     alt: "Rock"
    // },
    // {
    //     id: uuidv4(),
    //     nome: "Hip Hop",
    //     foto: HomePlaylistsImages.foto12,
    //     alt: "Hip Hop"
    // }
];