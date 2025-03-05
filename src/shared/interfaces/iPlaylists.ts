import React from "react";

export interface iPlaylist {
    id: string;
    name: string;
    urlImg?: string;
    estilo?: string;
    alt?: string;
}

export interface iMostListenedPlaylistContextType {
    mostListenedPlaylistsDataContext: iPlaylist[];
    setMostListenedPlaylistsDataContext: React.Dispatch<React.SetStateAction<iPlaylist[]>>
}