import "./ConteudoPrincipal.css";
import Cabecalho from "./Cabecalho";
import MusicSection from "../MusicSection";

import { usePesquisa } from "../../hooks/usePesquisa";
import { useMostListenedPlaylists } from "../../hooks/useMostListenedPlaylists";
import { useSaudacao } from "../../hooks/useSaudacao";

const ConteudoPrincipal = () => {

    const saudacao = useSaudacao();
    const { userSearch, dataUserSearched, userSearchCarregando } = usePesquisa();
    const { mostListenedPlaylistsDataContext } = useMostListenedPlaylists();

    return (
        <main
            id="content"
            className="content"
        >
            <div className="main-container">
                <Cabecalho />

                <div className="playlist-container">
                    <div
                        id="result-playlists"
                        className="result-playlists"
                    >
                        <div className="playlist__header">
                            <h1
                                className="playlist__header__greeting"
                                id="greeting"
                            >
                                {saudacao}
                            </h1>
                        </div>

                        {
                            dataUserSearched && userSearch !== "" ?
                                userSearchCarregando ?
                                    <>
                                    </>
                                    :
                                    < MusicSection
                                        titulo="Artistas encontrados"
                                        itens={dataUserSearched}
                                    />
                                :
                                <>
                                    <MusicSection
                                        titulo="Playlists mais escutadas"
                                        itens={mostListenedPlaylistsDataContext}
                                    />

                                    {/* <MusicSection
                                        titulo="Playlists mais escutadas"
                                        itens={mostListenedPlaylistsDataContext}
                                    /> */}
                                </>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ConteudoPrincipal;