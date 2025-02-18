import Cabecalho from "./Cabecalho";
import "./ConteudoPrincipal.css";
import Playlists from "./Playlists";

const ConteudoPrincipal = () => {
    return (
        <main 
            id="content"
            className="content"
        >
            <div className="main-container">
                <Cabecalho />

                <Playlists />
            </div>
        </main>
    );
}

export default ConteudoPrincipal;