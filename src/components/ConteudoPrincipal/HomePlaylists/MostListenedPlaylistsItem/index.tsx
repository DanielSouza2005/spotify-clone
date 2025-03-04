import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iPlaylist } from "../../../../shared/interfaces/iPlaylists";
import "./MostListenedPlaylistsItem.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface MostListenedPlaylistsProps {
    playlistsData: iPlaylist
}

const MostListenedPlaylistsItem = ({ playlistsData }: MostListenedPlaylistsProps) => {
    return (
        <div className="cards">
            <div className="cards__container">
                <img src={playlistsData.foto} alt={playlistsData.alt} loading="lazy" />
                <div className="play">
                    <FontAwesomeIcon
                        icon={faPlay}
                        className="fa__play__icon"
                    />
                </div>
            </div>
            <div className="cards__info__container">
                <span>{playlistsData.nome}</span>
            </div>
        </div>
    );
}

export default MostListenedPlaylistsItem;