import Logo from "../Logo";
import logoImagem from "../../shared/assets/logo-spotify.png";
import "./Sidebar.css";
import SidebarNavigation from "./SidebarNavigation";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navegation">
                <Logo 
                    imagem={logoImagem}
                />

                <SidebarNavigation />                
            </nav>
        </div>
    );
}

export default Sidebar;