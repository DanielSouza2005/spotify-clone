import "./MostListenedPlaylists.css";

import { useMostListenedPlaylists } from "../../../../hooks/MostListenedPlaylists";
import MostListenedPlaylistsItem from "../MostListenedPlaylistsItem";

const MostListenedPlaylists = () => {

    const { mostListenedPlaylistsDataContext } = useMostListenedPlaylists();

    return (
        <div className="mostListenedPlaylists__container">
            <h2 className="playlist__header__title">Playlists mais escutadas</h2>

            <div className="offer__scroll__container">
                <div className="offer__list">
                    <section className="offer__list__item">
                        {
                            mostListenedPlaylistsDataContext.map((mostListenedPlaylistDataContext) => (
                                <MostListenedPlaylistsItem
                                    playlistsData={mostListenedPlaylistDataContext}
                                    key={mostListenedPlaylistDataContext.id}
                                />
                            ))
                        }
                    </section>
                </div>
            </div>
        </div>
    );
}

export default MostListenedPlaylists;