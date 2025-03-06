import React from "react";

export interface iArtist {
    id: number;
    name: string;
    genre: string;
    urlImg: string;
    alt?: string;
}

export interface iArtistRecommendedContext {
    artistsRecommended: iArtist[];
    setArtistsRecommended: React.Dispatch<React.SetStateAction<iArtist[]>>
}