import style from "./UserHome.module.css"

function UserHome(){

    return(
        <div className={style.body}>

            

            <div className={style.containerDireito}>

                <h1>Bem Vindo, Gabriel Linhares</h1>
                <h2 className={style.selecao}>Suas playlists</h2>

                <container className={style.containerPlaylists}>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                </container>
                

                <h2 className={style.selecao}>Playlists recomendadas</h2>

                <container className={style.containerPlaylists}>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                </container>

                <h2 className={style.selecao}>Recomendados</h2>

                <container className={style.containerPlaylists}>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                </container>

                <h2 className={style.selecao}>Favoritas</h2>

                <container className={style.containerPlaylists}>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                    <div className={style.playlist}>
                        <label>nome da musica</label>
                    </div>
                </container>

            </div>

        </div>
    )
}

export default UserHome