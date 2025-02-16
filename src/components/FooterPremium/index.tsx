import Botao from "../Botao";
import "./FooterPremium.css";

const FooterPremium = () => {
    return (
        <footer className="footer__premium">
            <div className="footer__premium__container">
                <div className="footer__premium__container__text">
                    <h2>Testar o Premium de graça</h2>
                    <p>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
                </div>
                <Botao
                    estilo="footer__premium__button"
                >
                    <span className="footer__premium__button__subscribe">
                        Inscreva-se grátis!
                    </span>
                </Botao>
            </div>
        </footer>
    );
}

export default FooterPremium;