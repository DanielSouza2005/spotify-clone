import { useEffect, useState } from "react";

interface FetchState<T> {
    dado: T | null;
    carregando: boolean;
    erro: string | null;
}

function useFetch<T>(url: string, deveBuscar : boolean): FetchState<T> {
    const [dado, setDado] = useState<T | null>(null);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        if (url === "" || !deveBuscar) return;

        const fetchData = async () => {
            setCarregando(true);
            setErro(null);

            try {
                const resposta = await fetch(url);

                if (!resposta.ok) {
                    throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);                    
                }

                const resultado: T = await resposta.json();
                setDado(resultado);
            }
            catch (err) {
                setErro((err as Error).message);
            }
            finally {
                setCarregando(false);
            }
        };

        fetchData();

    }, [url, deveBuscar]);

    return {
        dado, carregando, erro
    }
}

export default useFetch;