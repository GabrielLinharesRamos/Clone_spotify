import style from "./ContainerEsquerdo.module.css"
import image from "../../imagens-utilizadas/spotify-logo.png"
import { Link } from "react-router-dom"

function ContainerEsquerdo(){

    function desloga(){
        const removido=localStorage.removeItem("usuario")

        alert(removido)
    }

    return(
        <div className={style.containerEsquerdo}>

                
        <div className={style.logo}>
            <img className={style.logo_foto} src={image} alt="imagem"/>
            <h1>Spotify</h1>
        </div>

        <div className={style.primeiraSessao}>
            <Link className={style.link} to="/userHome">Home</Link>

            <Link className={style.link} to="/user">Minha conta</Link>

            <Link className={style.link}>Buscar</Link>

            <Link className={style.link}>Categorias</Link>

            <Link onClick={desloga} className={style.link} to="/">Sair</Link>
        </div>

        <div className={style.segundaSessao}>
            <h4>Top Brasil</h4>
            <h4>Top internacionais</h4>
            <h4>Nossos artistas</h4>
        </div>
    </div>
    )
}

export default ContainerEsquerdo