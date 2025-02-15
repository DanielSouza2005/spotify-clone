import "./SidebarNavigation.css";
import { faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import SidebarNavegationLink from "./SidebarNavigationLink";

const SidebarNavigation = () => {
    return (
        <div className="sidebar__navegation__menu">
            <ul>
                <li>
                    <SidebarNavegationLink
                        icone={faHouse}
                        texto={"Início"}
                        estiloIcone={"sidebar__navegation__menu__icone"}
                        estiloTexto={"sidebar__navegation__menu__texto"}
                    />
                </li>
                <li>
                    <SidebarNavegationLink
                        icone={faSearch}
                        texto={"Buscar"}
                        estiloIcone={"sidebar__navegation__menu__icone"}
                        estiloTexto={"sidebar__navegation__menu__texto"}
                    />
                </li>
            </ul>
        </div>
    );
}

export default SidebarNavigation;