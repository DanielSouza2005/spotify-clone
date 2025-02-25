import { iPlaylist } from "../../../../shared/interfaces/iPlaylists";
import "./MostListenedPlaylistsItem.css";

interface MostListenedPlaylistsProps {
    playlistsData: iPlaylist
}

const MostListenedPlaylistsItem = ({ playlistsData }: MostListenedPlaylistsProps) => {
    return (
        <div className="cards">
            <div className="cards__container">
                <img src={playlistsData.foto} alt={playlistsData.alt} loading="lazy" />
            </div>
            <div className="cards__info__container">
                <span>{playlistsData.nome}</span>
            </div>
        </div>
    );
}

export default MostListenedPlaylistsItem;