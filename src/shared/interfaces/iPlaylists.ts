import React from "react";

export interface iPlaylist {
    id: string;
    nome: string;
    foto?: string;
    estilo?: string;
    alt?: string;
}

export interface iMostListenedPlaylistContextType {
    mostListenedPlaylistsDataContext: iPlaylist[];
    setMostListenedPlaylistsDataContext: React.Dispatch<React.SetStateAction<iPlaylist[]>>
}