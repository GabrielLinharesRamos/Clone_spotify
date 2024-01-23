import style from "./Home.module.css"
import image from "../../imagens-utilizadas/imagem_projeto_spotify.jpg"

function Home(){
    return(
        <div className={style.conteudo_principal}>
        <img className={style.imagem_central} src={image} alt="imagem"/>
        <button className={style.botao_imagem}>venha se unir a gente</button>
    </div>

    )
}

export default Home