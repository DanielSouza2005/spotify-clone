import { createContext, useState } from "react";
import { iHomePlaylistContextType } from "../../shared/interfaces/iPlaylists";
import { iChildren } from "../../shared/interfaces/iChildren";
import { HomePlaylistsData } from "../../shared/data/HomePlaylists";

export const HomePlaylistsContext = createContext<iHomePlaylistContextType | undefined>(undefined);
HomePlaylistsContext.displayName = "Home Playlists";

export const HomePlaylistsProvider = ({ children } : iChildren) => {

    const [homePlaylistsDataContext, setHomePlaylistsDataContext] = useState(HomePlaylistsData);

    return(
        <HomePlaylistsContext.Provider value={{ homePlaylistsDataContext, setHomePlaylistsDataContext }} >
            {children}
        </HomePlaylistsContext.Provider>
    );
}