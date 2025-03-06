import { iPlaylist } from "./iPlaylists";

export interface iUserSearchDataCombined {
    artistas: iArtist[];
    playlists: iPlaylist[];
}

export interface iUserSearchContextType {
    userSearch: string;
    setUserSearch: React.Dispatch<React.SetStateAction<string>>;
    dataUserSearched: iUserSearchDataCombined;
    setDataUserSearched: React.Dispatch<React.SetStateAction<iUserSearchDataCombined>>;
    userSearchCarregando: boolean;
    setUserSearchCarregando: React.Dispatch<React.SetStateAction<boolean>>;
    userSearchErro: string;
    setUserSearchErro: React.Dispatch<React.SetStateAction<string>>;
}