import { useContext } from "react";
import { RecommendedArtistsContext } from "../../context/RecommendedArtists";

const useRecommendedArtists = () => {

    const { artistsRecommended, setArtistsRecommended } = useContext(RecommendedArtistsContext)!;

    return {
        artistsRecommended, setArtistsRecommended
    }
}

export default useRecommendedArtists;