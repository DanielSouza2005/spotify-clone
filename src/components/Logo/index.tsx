import "./Logo.css";

interface LogoProps {
    imagem: string; 
}

const Logo = ({ imagem } : LogoProps) => {
    return (
        <div className="logo">
            <img src={imagem} alt="Logo do Spotify" />
        </div>
    );
}

export default Logo;