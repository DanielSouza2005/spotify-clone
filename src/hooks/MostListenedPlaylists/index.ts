import { useContext } from "react"
import { MostPlaylistsContext } from "../../context/MostListenedPlaylists";

export const useMostListenedPlaylists = () => {
    const { mostListenedPlaylistsDataContext, setMostListenedPlaylistsDataContext } = useContext(MostPlaylistsContext)!;

    return {
        mostListenedPlaylistsDataContext, setMostListenedPlaylistsDataContext
    }
}