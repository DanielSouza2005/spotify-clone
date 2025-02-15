import "./SidebarNavegationLink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface SidebarNavegationLinkProps {
    icone: IconDefinition;
    texto: string;
    estiloIcone?: string;
    estiloTexto?: string;
}

const SidebarNavegationLink = ({ icone, texto, estiloIcone, estiloTexto } : SidebarNavegationLinkProps) => {
    return (
        <>
            <FontAwesomeIcon
                icon={icone}
                className={estiloIcone}
            />

            <span 
                className={estiloTexto}
            >
                {texto}
            </span>
        </>
    );
}

export default SidebarNavegationLink;