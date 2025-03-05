import "./MusicSectionItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iPlaylist } from "../../../shared/interfaces/iPlaylists";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

interface MusicSectionItemProps {
    data: iPlaylist | iArtist;
}

const MusicSectionItem = ({ data }: MusicSectionItemProps) => {
    return (
        <div className="cards">
            <div className="cards__container">
                <img src={data.urlImg} alt={data.alt ?? ""} loading="lazy" />
                <div className="play">
                    <FontAwesomeIcon
                        icon={faPlay}
                        className="fa__play__icon"
                    />
                </div>
            </div>
            <div className="cards__info__container">
                <span>{data.name}</span>
            </div>
        </div>
    );
}

export default MusicSectionItem;