import { useMemo } from "react";

const obterSaudacao = (): string => {
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) return "Bom dia";
    if (hora >= 12 && hora < 18) return "Boa tarde";
    return "Boa noite";
}

export const useSaudacao = () : string => {
    return useMemo(() => obterSaudacao(), []);
}