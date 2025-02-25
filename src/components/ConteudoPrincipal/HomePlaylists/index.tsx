import "./HomePlaylists.css";

import { useSaudacao } from "../../../hooks/useSaudacao";
import MostListenedPlaylists from "./MostListenedPlaylists";

const HomePlaylists = () => {

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
                </div>

                <MostListenedPlaylists />
                {/* <MostListenedPlaylists /> */}
            </div>
        </div>
    );
}

export default HomePlaylists;