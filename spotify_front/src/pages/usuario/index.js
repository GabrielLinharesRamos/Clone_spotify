import style from "./Usuario.module.css"
import image from "../../imagens-utilizadas/man-avatar-icon-700-245635972.jpg"

function Usuario(){

    return(
        <div className={style.body}>
            <div className={style.container}>
                <div>

                    <h1 className={style.titulo}>Perfil</h1>

                    <div className={style.tituloSessao}>Username</div>
                    <input className={style.textBox} type="text"/>

                    <div className={style.tituloSessao}>E-mail</div>
                    <input className={style.textBox} type="email"/>

                    <div className={style.tituloSessao}>Senha</div>
                    <input className={style.textBox} type="password"/>

                    <div className={style.tituloSessao}>Sexo</div>

                    <button className={style.botao}>Salvar</button>

                </div>

                <div>
                    <img className={style.fotoAvatar} src={image} alt="imagem"/>
                </div>

                
            </div>
        </div>
    )
}


export default Usuario;
