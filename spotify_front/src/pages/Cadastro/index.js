import style from "./Cadastro.module.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro(){
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const [nome,setNome]=useState('')
    const [sobrenome,setSobrenome]=useState('')

    const navigate=useNavigate()

    function Usuario(nome, sobrenome, email, senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
      }

    async function acessaBack(){
            const dados=new Usuario(nome,sobrenome,email,senha)

            const dadosJson = JSON.stringify(dados);
            console.log(dadosJson);

            const requestOption={
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:dadosJson
            }
            
            try {
                const resposta = await fetch(`http://localhost:3333/sessions`,requestOption)
                const corpo = await resposta.json();
                if(corpo.nome){
                    localStorage.setItem("usuario",JSON.stringify(corpo.email))
                    navigate('/userHome',{replace:true})
                }else{
                    alert("algo deu errado")
                }

            } catch (error) {
                alert("Erro ao acessar a API");
            }
    }

    return(
        <div className={style.conteudo_principal}>
        <div className={style.container}>
            <h1 className={style.texto_container}>Inscreva-se e curta!</h1>
            <h3 className={style.subtexto_container}>É rapido e fácil.</h3>

            <div className={style.nome_user}>
                <input onChange={(e)=>setNome(e.target.value)} value={nome} placeholder="nome" className={style.half_textBox} type="text"/>
                <input onChange={(e)=>setSobrenome(e.target.value)} value={sobrenome} placeholder="sobrenome" className={style.half_textBox} type="text"/>
            </div>

            <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="E-mail" className={style.textBox} type="email"/>
            <input onChange={(e)=>setSenha(e.target.value)} value={senha} placeholder="nova Senha" className={style.textBox} type="password"/>


            <button onClick={acessaBack} className={style.botao}>Criar</button>

            <Link className={style.registre_se} to="/login" >Já tem conta? Entre!</Link>
        </div>
    </div>
    )
}

export default Cadastro