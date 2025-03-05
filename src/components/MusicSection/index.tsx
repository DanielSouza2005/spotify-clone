import "./MusicSection.css";
import { iPlaylist } from "../../shared/interfaces/iPlaylists";
import MusicSectionItem from "./MusicSectionItem";

interface MusicSectionProps {
    titulo: string;
    itens: iPlaylist[] | iArtist[];
}

const MusicSection = ({ titulo, itens }: MusicSectionProps) => {
    return (

        <>
            {
                itens.length > 0 ?
                    <div className="MusicSection__container">
                        <h2 className="MusicSection__title">{titulo}</h2>
                        <div className="offer__scroll__container">
                            <div className="offer__list">
                                <section className="offer__list__item">
                                    {
                                        itens.map((item) => (
                                            <MusicSectionItem
                                                data={item}
                                                key={item.id}
                                            />
                                        ))
                                    }
                                </section>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="MusicSection__container__notFound">
                        <h2 className="MusicSection__title__notFound">Nenhum resultado encontrado :(</h2>
                    </div>
            }
        </>

    );
}

export default MusicSection;