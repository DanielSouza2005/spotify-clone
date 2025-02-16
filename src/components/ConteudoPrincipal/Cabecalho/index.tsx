import "./Cabecalho.css";
import Botao from "../../Botao";
import Input from "../../Input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";

const Cabecalho = () => {
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

                        <Input
                            id="search"
                            type="text"
                            maxLength={800}
                            placeholder="O que você quer ouvir?"
                            estilo="header__navigation__search__input"
                        />
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