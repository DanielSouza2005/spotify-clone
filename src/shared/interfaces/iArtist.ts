interface iArtist {
    id: number;
    name: string;
    genre: string;
    urlImg: string;
    alt?: string;
}

interface iArtistRecommendedContext {
    artistsRecommended: iArtist[];
    setArtistsRecommended: React.Dispatch<React.SetStateAction<iArtist[]>>
}