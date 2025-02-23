import "./HomePlaylists.css";

import { useSaudacao } from "../../../hooks/useSaudacao";
import { useHomePlaylists } from "../../../hooks/HomePlaylists";
import HomePlaylistsItem from "./HomePlaylistsItem";

const HomePlaylists = () => {

    const saudacao = useSaudacao();
    const { homePlaylistsDataContext } = useHomePlaylists();

    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist__header">
                    <h1
                        className="playlist__header__greeting"
                        id="greeting"
                    >
                        {saudacao}
                    </h1>

                    <h2 className="playlist__header__title">Navegar por todas as seções</h2>
                </div>

                <div className="offer__scroll__container">
                    <div className="offer__list">
                        <section className="offer__list__item">

                            {
                                homePlaylistsDataContext.map((homePlaylistDataContext) => (
                                    <HomePlaylistsItem
                                        playlistsData={homePlaylistDataContext}
                                    />
                                ))
                            }
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePlaylists;