import "./Botao.css";
import { ReactNode } from "react";

interface BotaoProps {
    children: ReactNode;
    estilo?: string;
}

const Botao = ({ children, estilo } : BotaoProps) => {
    return (
        <button className={estilo}>
            {children}
        </button>
    );
}

export default Botao;