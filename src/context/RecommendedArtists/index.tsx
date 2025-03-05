import { createContext, useEffect, useState } from "react";
import { iChildren } from "../../shared/interfaces/iChildren";
import useFetch from "../../hooks/useFetch";

export const RecommendedArtistsContext = createContext<iArtistRecommendedContext | undefined>(undefined);
RecommendedArtistsContext.displayName = "Artistas Recomendados";

export const RecommendedArtistsProvider = ({ children }: iChildren) => {

    const [artistsRecommended, setArtistsRecommended] = useState<iArtist[]>([]);

    const { dado, carregando, erro } = useFetch<iArtist[]>("https://my-json-server.typicode.com/DanielSouza2005/spotify-clone-fakeapi/artists?_limit=6", true);

    useEffect(() => {
        if (dado && !carregando && !erro) {
            setArtistsRecommended(dado);
        }
    }, [dado, carregando, erro]);

    return (
        <RecommendedArtistsContext.Provider value={{ artistsRecommended, setArtistsRecommended }}>
            {children}
        </RecommendedArtistsContext.Provider>
    );
}
