import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import "./SidebarNavegationLink.css";

interface SidebarNavegationLinkProps {
    icone: IconDefinition;
    texto: string;
}

const SidebarNavegationLink = ({ icone, texto } : SidebarNavegationLinkProps) => {
    return (
        <>
            <FontAwesomeIcon
                icon={icone}
                className="sidebar__navegation__menu__icone"
            />

            <span className="sidebar__navegation__menu__texto">{texto}</span>
        </>
    );
}

export default SidebarNavegationLink;