import "./ConteudoPrincipal.css";
import Cabecalho from "./Cabecalho";
import HomePlaylists from "./HomePlaylists";
import { usePesquisa } from "../../hooks/usePesquisa";

const ConteudoPrincipal = () => {

    const { userSearch, dataUserSearched } = usePesquisa();

    return (
        <main
            id="content"
            className="content"
        >
            <div className="main-container">
                <Cabecalho />

                {
                    dataUserSearched && userSearch !== "" ?
                        "Resultados encontrados!"
                        :
                        <HomePlaylists />
                }

            </div>
        </main>
    );
}

export default ConteudoPrincipal;