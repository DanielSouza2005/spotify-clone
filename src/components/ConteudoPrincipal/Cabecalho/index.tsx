import "./Cabecalho.css";
import Botao from "../../Botao";
import Input from "../../Input";

import { iPlaylist } from "../../../shared/interfaces/iPlaylists";
import { iArtist } from "../../../shared/interfaces/iArtist";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { usePesquisa } from "../../../hooks/usePesquisa";
import useFetch from "../../../hooks/useFetch";

const Cabecalho = () => {

    //Estados Locais
    const [textoDigitado, setTextoDigitado] = useState("");
    const [deveBuscar, setDeveBuscar] = useState(false);

    //Custom Hooks
    const { userSearch, setUserSearch, setDataUserSearched, setUserSearchCarregando, setUserSearchErro } = usePesquisa();
    const { dado: artists, carregando: carregandoArtists, erro: erroArtists } = useFetch<iArtist[]>(
        `https://my-json-server.typicode.com/DanielSouza2005/spotify-clone-fakeapi/artists?name_like=${userSearch}`,
        deveBuscar);
    const { dado: playlists, carregando: carregandoPlaylists, erro: erroPlaylists } = useFetch<iPlaylist[]>(
        `https://my-json-server.typicode.com/DanielSouza2005/spotify-clone-fakeapi/playlists?name_like=${userSearch}`,
        deveBuscar);

    //Efeito para monitorar mudanças na pesquisa
    useEffect(() => {
        if (userSearch !== "" || artists || playlists) {
            setDeveBuscar(true);
        }
    }, [userSearch, artists, playlists]);

    //Efeito para atualizar os dados da pesquisa
    useEffect(() => {
        const dadosPesquisados = {
            artistas: artists ?? [],
            playlists: playlists ?? []
        };

        setDataUserSearched(dadosPesquisados ?? []);
        setUserSearchCarregando(carregandoArtists || carregandoPlaylists);
        setUserSearchErro(erroArtists || erroPlaylists || "");

        if (artists && playlists) {
            setDeveBuscar(false);
        }
    }, [artists, playlists, carregandoArtists, carregandoPlaylists, erroArtists, erroPlaylists,
        setDataUserSearched, setUserSearchCarregando, setUserSearchErro]);

    //Controladores de comportamento
    const aoDigitarPesquisa = (evento: ChangeEvent<HTMLInputElement>) => {
        setTextoDigitado(evento.target.value);
    }

    const aoPesquisar = (evento: FormEvent<HTMLFormElement> | React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        evento.preventDefault();
        setUserSearch(textoDigitado);

        setTextoDigitado("");
    }

    return (
        <header className="header">
            <div className="header__navigation">
                <div className="header__navigation__container">
                    <div className="header__navigation__container__buttons">
                        <Botao estilo="header__navigation__container__buttonLeft">
                            <FontAwesomeIcon
                                icon={faAngleLeft}
                            />
                        </Botao>

                        <Botao estilo="header__navigation__container__buttonRight">
                            <FontAwesomeIcon
                                icon={faAngleRight}
                            />
                        </Botao>
                    </div>

                    <div className="header__navigation__search">
                        <FontAwesomeIcon
                            className="header__navigation__search__icon"
                            icon={faSearch}
                            onClick={(evento) => aoPesquisar(evento)}
                        />

                        <form
                            action=""
                            onSubmit={aoPesquisar}
                        >
                            <Input
                                id="search"
                                type="text"
                                maxLength={800}
                                placeholder="O que você quer ouvir?"
                                estilo="header__navigation__search__input"
                                valor={textoDigitado}
                                aoDigitar={aoDigitarPesquisa}
                            />
                        </form>
                    </div>

                    <div className="header__login">
                        <Botao estilo="header__login__subscribe">Inscreva-se</Botao>
                        <Botao estilo="header__login__logar">Entrar</Botao>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Cabecalho;