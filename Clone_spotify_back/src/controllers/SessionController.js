const User= require("../models/User");


class sessionController{
    async store(req, res) {
        const { email, senha, nome, sobrenome } = req.body;
    
        const flagCadastro = await User.findOne({ email });
    
        if (flagCadastro) {
            return res.json('O email em questão já está cadastrado');
        }
    
        try {
            const user = await User.create({
                email,
                senha,
                nome,
                sobrenome,
            });
            return res.json(user);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    }

    async buscaHomeUserEmail(req,res) {
        const email = req.query.email;
        const emailDecodificado = decodeURIComponent(email);

        console.log('E-mail decodificado:', emailDecodificado);
    

        const usuario = await User.findOne({ email:emailDecodificado }).exec();

        if(usuario){
            res.json({status:true})
        }else{
            res.json({status:false})
        }
    }
 
    
    async buscaHomeUser(req,res){
        const email=req.query.email;
        const emailDecodificado=decodeURIComponent(email);
        console.log('E-mail decodificado:', emailDecodificado);

        const senha=req.query.senha;
        const senhaDecodificado=decodeURIComponent(senha);
        console.log('senha decodificado:', senhaDecodificado);

        const usuario=await User.findOne({email:emailDecodificado,senha:senhaDecodificado}).exec()

        if(usuario){
            res.json({status:true})
        }else{
            res.json({status:false})
        }

    }
}

module.exports = new sessionController();