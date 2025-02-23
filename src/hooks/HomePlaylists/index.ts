import { useContext } from "react"
import { HomePlaylistsContext } from "../../context/HomePlaylists";

export const useHomePlaylists = () => {
    const { homePlaylistsDataContext, setHomePlaylistsDataContext } = useContext(HomePlaylistsContext)!;

    return {
        homePlaylistsDataContext, setHomePlaylistsDataContext
    }
}