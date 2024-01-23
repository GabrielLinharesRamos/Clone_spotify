/* eslint-disable jsx-a11y/anchor-is-valid */

import style from "./Faq.module.css"

function Faq(){
    return(
<div className={style.conteudo_principal}>
    <div className={style.container}>
        <p>Perguntas frequentes</p>
        <a className={style.pergunta}>Não consigo redefinir minha senha</a>
        <a className={style.pergunta}>Não lembro das minhas informações de login</a>
        <a className={style.pergunta}>Formas de pagamento</a>
        <a className={style.pergunta}>Atualizações de preço</a>
    </div>

</div>
    )
}

export default Faq