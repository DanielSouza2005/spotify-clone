import "./Logo.css";

const Logo = ({ imagem }) => {
    return (
        <div className="logo">
            <img src={imagem} alt="Logo do Spotify" />
        </div>
    );
}

export default Logo;