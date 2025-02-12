import "./SidebarNavigation.css";
import { faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarNavigation = () => {
    return (
        <div className="sidebar__navegation__menu">
            <ul>
                <li>
                    <FontAwesomeIcon icon={faHouse} className="sidebar__navegation__menu__icone" />
                    <span className="sidebar__navegation__menu__texto">Início</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faSearch} className="sidebar__navegation__menu__icone" />
                    <span className="sidebar__navegation__menu__texto">Buscar</span>
                </li>
            </ul>
        </div>
    );
}

export default SidebarNavigation;