import Botao from "../../../Botao";
import "./SidebarLibraryFirstPlaylist.css";

interface SidebarLibraryFirstPlaylistProps {
    titulo: string;
    subtitulo: string;
    textoBotao: string;
}

const SidebarLibraryFirstPlaylist = ({ titulo, subtitulo, textoBotao } : SidebarLibraryFirstPlaylistProps) => {
    return (
        <section className="sidebar__navegation__first_playlist">
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            
            <Botao 
                estilo="sidebar__navegation__first_playlist__button"
            >
                {textoBotao}
            </Botao>
        </section>
    );
}

export default SidebarLibraryFirstPlaylist;