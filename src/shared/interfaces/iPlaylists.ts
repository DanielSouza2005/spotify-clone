import React from "react";

export interface iPlaylist {
    id: string;
    nome: string;
    foto?: string;
    estilo?: string;
    alt?: string;
}

export interface iHomePlaylistContextType {
    homePlaylistsDataContext: iPlaylist[];
    setHomePlaylistsDataContext: React.Dispatch<React.SetStateAction<iPlaylist[]>>
}