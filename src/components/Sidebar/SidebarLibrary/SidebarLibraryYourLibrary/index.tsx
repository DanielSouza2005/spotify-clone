import "./SidebarLibraryYourLibrary.css";
import SidebarNavegationLink from "../../SidebarNavigation/SidebarNavigationLink";
import { faBook, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarLibraryYourLibrary = () => {
    return (
        <section className="sidebar__library__yourLibrary">
            <div className="sidebar__library__yourLibrary__container">
                <SidebarNavegationLink
                    texto="Sua Biblioteca"
                    icone={faBook}
                    estiloIcone="sidebar__navegation__menu__icone"
                    estiloTexto="sidebar__library__navegation__texto"
                />
            </div>

            <FontAwesomeIcon
                icon={faPlus}
                className="sidebar__library__yourLibrary__icone__plus"
            />
        </section>
    );
}

export default SidebarLibraryYourLibrary;