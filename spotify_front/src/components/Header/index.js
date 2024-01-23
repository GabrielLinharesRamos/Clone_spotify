import style from "./Header.module.css"
import { Link } from "react-router-dom"
import image from "../../imagens-utilizadas/spotify-logo.png"

function Header(){
    return(
        <header className={style.header}>

        <div className={style.logo}>
            <img className={style.logo_foto} src={image} alt="imagem"/>
            <h1>Spotify</h1>
        </div>

        <div className={style.menu}>
            <Link className={style.elementoMenu} to="/">Home</Link> |
            <Link className={style.elementoMenu} to="/login">Login</Link> |
            <Link className={style.elementoMenu} to="/faq">FAQ</Link>
        </div>
    </header>
    )
}

export default Header