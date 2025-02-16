import "./Sidebar.css";
import Logo from "../Logo";
import logoImagem from "../../shared/assets/logo-spotify.png";
import SidebarNavigation from "./SidebarNavigation";
import SiderbarLibrary from "./SidebarLibrary";

const Sidebar = () => {
    return (
        <div
            className="sidebar"
            id="sidebar"
        >
            <nav className="sidebar__navegation">
                <Logo
                    imagem={logoImagem}
                />

                <SidebarNavigation />
            </nav>

            <SiderbarLibrary />
        </div>
    );
}

export default Sidebar;