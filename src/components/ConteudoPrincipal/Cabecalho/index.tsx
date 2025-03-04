import "./Cabecalho.css";
import Botao from "../../Botao";
import Input from "../../Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { usePesquisa } from "../../../hooks/usePesquisa";
import useFetch from "../../../hooks/useFetch";

const Cabecalho = () => {

    const [textoDigitado, setTextoDigitado] = useState("");
    const { userSearch, setUserSearch, setDataUserSearched, setUserSearchCarregando, setUserSearchErro } = usePesquisa();
    const [deveBuscar, setDeveBuscar] = useState(false);

    const { dado, carregando, erro } = useFetch<Artist[]>(`https://my-json-server.typicode.com/DanielSouza2005/spotify-clone-fakeapi/artists?name_like=${userSearch}`, deveBuscar);

    useEffect(() => {
        if (userSearch !== "" || dado) {
            setDeveBuscar(true);
        }
    }, [userSearch, dado]);

    useEffect(() => {
        setDataUserSearched(dado ?? []);
        setUserSearchCarregando(carregando);
        setUserSearchErro(erro ?? "");

        if (dado) {
            setDeveBuscar(false);
        }
    }, [dado, carregando, erro, 
        setDataUserSearched, setUserSearchCarregando, setUserSearchErro]);

    const aoDigitarPesquisa = (evento: ChangeEvent<HTMLInputElement>) => {
        setTextoDigitado(evento.target.value);
    }

    const aoPesquisar = (evento: FormEvent<HTMLFormElement>) => {
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