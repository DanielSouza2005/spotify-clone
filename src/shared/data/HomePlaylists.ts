import { HomePlaylistsImages } from "../assets/playlist";
import { iPlaylist } from "../interfaces/iPlaylists";
import { v4 as uuidv4 } from 'uuid';

export const HomePlaylistsData: iPlaylist[] = [
    {
        id: uuidv4(),
        nome: "Boas festas",
        foto: HomePlaylistsImages.foto1,
        estilo: "card1",
        alt: "Boas festas"
    },
    {
        id: uuidv4(),
        nome: "Feitos para você",
        foto: HomePlaylistsImages.foto2,
        estilo: "card2",
        alt: "Feitos para você"
    },
    {
        id: uuidv4(),
        nome: "Lançamentos",
        foto: HomePlaylistsImages.foto3,
        estilo: "card3",
        alt: "Lançamentos"
    },
    {
        id: uuidv4(),
        nome: "Creators",
        foto: HomePlaylistsImages.foto4,
        estilo: "card4",
        alt: "Creators"
    },
    {
        id: uuidv4(),
        nome: "Para treinar",
        foto: HomePlaylistsImages.foto5,
        estilo: "card5",
        alt: "Para treinar"
    },
    {
        id: uuidv4(),
        nome: "Podcasts",
        foto: HomePlaylistsImages.foto6,
        estilo: "card6",
        alt: "Podcasts"
    }
    ,
    {
        id: uuidv4(),
        nome: "Sertanejo",
        foto: HomePlaylistsImages.foto7,
        estilo: "card7",
        alt: "Sertanejo"
    },
    {
        id: uuidv4(),
        nome: "Samba e pagode",
        foto: HomePlaylistsImages.foto8,
        estilo: "card8",
        alt: "Samba e pagode"
    },
    {
        id: uuidv4(),
        nome: "Funk",
        foto: HomePlaylistsImages.foto9,
        estilo: "card9",
        alt: "Funk"
    },
    {
        id: uuidv4(),
        nome: "MPB",
        foto: HomePlaylistsImages.foto10,
        estilo: "card10",
        alt: "MPB"
    },
    {
        id: uuidv4(),
        nome: "Rock",
        foto: HomePlaylistsImages.foto11,
        estilo: "card11",
        alt: "Rock"
    },
    {
        id: uuidv4(),
        nome: "Hip Hop",
        foto: HomePlaylistsImages.foto12,
        estilo: "card12",
        alt: "Hip Hop"
    }
];