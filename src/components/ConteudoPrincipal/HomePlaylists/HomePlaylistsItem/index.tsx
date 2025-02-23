import { iPlaylist } from "../../../../shared/interfaces/iPlaylists";
import "./HomePlaylistsItem.css";

interface HomePlaylistsProps {
    playlistsData: iPlaylist
}

const HomePlaylistsItem = ({ playlistsData }: HomePlaylistsProps) => {
    return (
        <div
            className="cards"
            id={playlistsData.id}
        >
            <div className={`cards ${playlistsData.estilo}`}>
                <img src={playlistsData.foto} alt={playlistsData.alt} />
                <span>{playlistsData.nome}</span>
            </div>
        </div>
    );
}

export default HomePlaylistsItem;