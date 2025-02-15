import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Botao from "../../../Botao";
import "./SidebarLibraryLanguage.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const SidebarLibraryLanguage = () => {
    return (
        <section className="sidebar__navegation__language">
            <Botao>
                <FontAwesomeIcon 
                    icon={faGlobe}
                />
                <span> Português do Brasil </span>
            </Botao>
        </section>
    );
}

export default SidebarLibraryLanguage;