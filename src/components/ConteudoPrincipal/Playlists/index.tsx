import "./Playlists.css";
import { useSaudacao } from "../../../hooks/useSaudacao";

const Playlists = () => {

    const saudacao = useSaudacao();

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

                    <h2>Navegar por todas as seções</h2>
                </div>

                <div className="offer__scroll__container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {/* <a href="" className="cards">
                                <div className="cards card1">
                                    <img src="./src/assets/playlist/1.jpeg" alt="" />
                                    <span>Boas festas</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card2">
                                    <img src="./src/assets/playlist/2.png" alt="" />
                                    <span>Feitos para você</span>
                                </div>
                            </a> */}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlists;