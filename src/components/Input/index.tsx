import { ChangeEvent, ReactNode } from "react";
import "./Input.css";

interface InputProps {
    id: string;
    type?: string;
    maxLength?: number;
    placeholder?: string;
    children?: ReactNode;
    estilo?: string;
    valor?: string;
    aoDigitar?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ id, children, maxLength, placeholder, estilo, valor, aoDigitar, type = "text" }: InputProps) => {
    return (
        <input
            id={id}
            maxLength={maxLength}
            type={type}
            placeholder={placeholder}
            className={estilo}
            value={valor}
            onChange={aoDigitar}            
            autoComplete="off"
        >
            {children}
        </input>
    );
}

export default Input;