/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Login.module.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login(){
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')

    const navigate=useNavigate()

    async function acessaBack() {
        try{
        const url = `http://localhost:3333/buscaSessaoLogin?email=${encodeURIComponent(email)}&senha=${encodeURIComponent(senha)}`;

        const resposta = await fetch(url, {
            method: "GET",
            headers: { 'Content-type': 'application/json' },
        });

        const corpo = await resposta.json();
        if(corpo.status){
            localStorage.setItem("usuario",JSON.stringify(email))
            navigate('/userHome',{replace:true})
        }

        } catch (error) {
        alert("Erro ao acessar a API");
    }
    }

    return(
        <div className={style.conteudo_principal}>
            <div className={style.container}>
                <h1 className={style.texto_container}>Entrar no Spotify</h1>
            
                <a className={style.label}>E-mail:</a>
                <input onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail" className={style.textBox} type="email"/>

                <a className={style.label}>Senha:</a>
                <input onChange={(e)=>setSenha(e.target.value)} className={style.textBox} placeholder="Senha" type="password"/>

                <button onClick={acessaBack} className={style.botao}>Entrar</button>

                <a className={style.esqueceu_senha}>Esqueceu a senha?</a>
                <Link className={style.registre_se} to="/cadastro">Não tem conta? Inscreva-se!</Link>
            </div>
        </div>
    )
}

export default Login;
