import "./ConteudoPrincipal.css";
import Cabecalho from "./Cabecalho";
import HomePlaylists from "./HomePlaylists";

const ConteudoPrincipal = () => {
    return (
        <main 
            id="content"
            className="content"
        >
            <div className="main-container">
                <Cabecalho />

                <HomePlaylists />
            </div>
        </main>
    );
}

export default ConteudoPrincipal;