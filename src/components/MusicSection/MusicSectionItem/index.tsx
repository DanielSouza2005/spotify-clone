import "./MusicSectionItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import { iPlaylist } from "../../../shared/interfaces/iPlaylists";
import { iArtist } from "../../../shared/interfaces/iArtist";

interface MusicSectionItemProps {
    data: iPlaylist | iArtist;
}

const isArtist = (data: iPlaylist | iArtist): data is iArtist => {
    return 'genre' in data;
};

const MusicSectionItem = ({ data }: MusicSectionItemProps) => {

    let legenda = "";

    if (isArtist(data)) {
        legenda = "Artista";
    }
    else {
        legenda = "Playlist";
    }

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
            <div className="cards__info__section">
                <div className="cards__info__container">
                    <span>{data.name}</span>
                </div>
                <div className="cards__info__content">
                    <span>{legenda}</span>
                </div>
            </div>
        </div>
    );
}

export default MusicSectionItem;