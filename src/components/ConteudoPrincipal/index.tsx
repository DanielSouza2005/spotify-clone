import Cabecalho from "./Cabecalho";
import "./ConteudoPrincipal.css";

const ConteudoPrincipal = () => {
    return (
        <main 
            id="content"
            className="content"
        >
            <div className="main-container">
                <Cabecalho />
            </div>
        </main>
    );
}

export default ConteudoPrincipal;