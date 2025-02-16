import { ReactNode } from "react";
import "./Input.css";

interface InputProps {
    id: string;
    type?: string;
    maxLength?: number;
    placeholder?: string;
    children?: ReactNode;
    estilo?: string;
}

const Input = ({ id, children, maxLength, placeholder, estilo, type = "text" }: InputProps) => {
    return (
        <input
            id={id}
            maxLength={maxLength}
            type={type}
            placeholder={placeholder}
            className={estilo}
        >
            {children}
        </input>
    );
}

export default Input;