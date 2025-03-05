import { createContext, useEffect, useState } from "react";
import { iMostListenedPlaylistContextType, iPlaylist } from "../../shared/interfaces/iPlaylists";
import { iChildren } from "../../shared/interfaces/iChildren";
import useFetch from "../../hooks/useFetch";

export const MostPlaylistsContext = createContext<iMostListenedPlaylistContextType | undefined>(undefined);
MostPlaylistsContext.displayName = "Home Playlists";

export const MostListenedPlaylistsProvider = ({ children }: iChildren) => {

    const [mostListenedPlaylistsDataContext, setMostListenedPlaylistsDataContext] = useState<iPlaylist[]>([]);

    const { dado, carregando, erro } = useFetch<iPlaylist[]>("https://my-json-server.typicode.com/DanielSouza2005/spotify-clone-fakeapi/playlists?_limit=6", true);

    useEffect(() => {
        if (dado && !carregando && !erro) {
            setMostListenedPlaylistsDataContext(dado);
        }
    }, [dado, carregando, erro]);

    return (
        <MostPlaylistsContext.Provider value={{ mostListenedPlaylistsDataContext, setMostListenedPlaylistsDataContext }} >
            {children}
        </MostPlaylistsContext.Provider>
    );
}