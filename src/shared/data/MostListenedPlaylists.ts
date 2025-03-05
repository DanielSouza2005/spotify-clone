import { MostListenedPlaylistsImages } from "../assets/playlist";
import { iPlaylist } from "../interfaces/iPlaylists";
import { v4 as uuidv4 } from 'uuid';

export const MostListenedPlaylistsData: iPlaylist[] = [
    {
        id: uuidv4(),
        name: "Boas festas",
        urlImg: MostListenedPlaylistsImages.foto1,
        alt: "Boas festas"
    },
    {
        id: uuidv4(),
        name: "Feitos para você",
        urlImg: MostListenedPlaylistsImages.foto2,
        alt: "Feitos para você"
    },
    {
        id: uuidv4(),
        name: "Lançamentos",
        urlImg: MostListenedPlaylistsImages.foto3,
        alt: "Lançamentos"
    },
    {
        id: uuidv4(),
        name: "Rock",
        urlImg: MostListenedPlaylistsImages.foto11,
        alt: "Rock"
    },
    {
        id: uuidv4(),
        name: "Para treinar",
        urlImg: MostListenedPlaylistsImages.foto5,
        alt: "Para treinar"
    },
    {
        id: uuidv4(),
        name: "Podcasts",
        urlImg: MostListenedPlaylistsImages.foto6,
        alt: "Podcasts"
    }
    ,
    // {
    //     id: uuidv4(),
    //     name: "Sertanejo",
    //     urlImg: HomePlaylistsImages.foto7,
    //     alt: "Sertanejo"
    // },
    // {
    //     id: uuidv4(),
    //     name: "Samba e pagode",
    //     urlImg: HomePlaylistsImages.foto8,
    //     alt: "Samba e pagode"
    // },
    // {
    //     id: uuidv4(),
    //     name: "Funk",
    //     urlImg: HomePlaylistsImages.foto9,
    //     alt: "Funk"
    // },
    // {
    //     id: uuidv4(),
    //     name: "MPB",
    //     urlImg: HomePlaylistsImages.foto10,
    //     alt: "MPB"
    // },
    // {
    //     id: uuidv4(),
    //     name: "Rock",
    //     urlImg: HomePlaylistsImages.foto11,
    //     alt: "Rock"
    // },
    // {
    //     id: uuidv4(),
    //     name: "Hip Hop",
    //     urlImg: HomePlaylistsImages.foto12,
    //     alt: "Hip Hop"
    // }
];