import "./SidebarLibrary.css";
import SidebarLibraryCookies from "./SidebarLibraryCookies";
import SidebarLibraryFirstPlaylist from "./SidebarLibraryFirstPlaylist";
import SidebarLibraryLanguage from "./SidebarLibraryLanguage";
import SidebarLibraryYourLibrary from "./SidebarLibraryYourLibrary";

const SiderbarLibrary = () => {
    return (
        <div className="sidebar__library">
            <div className="sidebar__library__navegation">
                <SidebarLibraryYourLibrary />

                <SidebarLibraryFirstPlaylist
                    titulo="Crie sua primeira playlist"
                    subtitulo="É fácil, vamos te ajudar :)"
                    textoBotao="Criar playlist"
                />

                <SidebarLibraryCookies />

                <SidebarLibraryLanguage />
            </div>
        </div>
    );
}

export default SiderbarLibrary;