import "./MusicSection.css";
import { iPlaylist } from "../../shared/interfaces/iPlaylists";
import MusicSectionItem from "./MusicSectionItem";
import { iUserSearchDataCombined } from "../../shared/interfaces/iUserSearch";

interface MusicSectionProps {
    titulo: string;
    itens: iPlaylist[] | iArtist[] | iUserSearchDataCombined;
    mostraNotFoundResult?: boolean;
}

const MusicSection = ({ titulo, itens, mostraNotFoundResult = true }: MusicSectionProps) => {

    const renderItens = () => {
        if (Array.isArray(itens)) {
            return itens.map((item) => (
                <MusicSectionItem
                    data={item}
                    key={item.id}
                />
            ))
        }
        else {
            const playlistItens = 'playlists' in itens && itens.playlists.length > 0 ?
                itens.playlists.map((playlist) => (
                    <MusicSectionItem
                        data={playlist}
                        key={playlist.id}
                    />
                ))
                :
                [];

            const artistItens = 'artistas' in itens && itens.artistas.length > 0 ?
                itens.artistas.map((artista) => (
                    <MusicSectionItem
                        data={artista}
                        key={artista.id}
                    />
                ))
                :
                [];

            // console.log(playlistItens, artistItens);

            return [...playlistItens, ...artistItens];

        }
    }

    const itemsRendered = renderItens();

    return (

        <>
            {
                itemsRendered.length > 0 ?
                    <div className="MusicSection__container">
                        <h2 className="MusicSection__title">{titulo}</h2>

                        <div className="offer__list">
                            <section className="offer__list__item">
                                {itemsRendered}
                            </section>
                        </div>
                    </div>
                    :
                    mostraNotFoundResult &&
                    <div className="MusicSection__container__notFound">
                        <h2 className="MusicSection__title__notFound">Nenhum resultado encontrado :(</h2>
                    </div>
            }
        </>

    );
}

export default MusicSection;