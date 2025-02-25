import { createContext, useState } from "react";
import { iMostListenedPlaylistContextType } from "../../shared/interfaces/iPlaylists";
import { iChildren } from "../../shared/interfaces/iChildren";
import { MostListenedPlaylistsData } from "../../shared/data/MostListenedPlaylists";

export const MostPlaylistsContext = createContext<iMostListenedPlaylistContextType | undefined>(undefined);
MostPlaylistsContext.displayName = "Home Playlists";

export const MostListenedPlaylistsProvider = ({ children } : iChildren) => {

    const [mostListenedPlaylistsDataContext, setMostListenedPlaylistsDataContext] = useState(MostListenedPlaylistsData);

    return(
        <MostPlaylistsContext.Provider value={{ mostListenedPlaylistsDataContext, setMostListenedPlaylistsDataContext }} >
            {children}
        </MostPlaylistsContext.Provider>
    );
}