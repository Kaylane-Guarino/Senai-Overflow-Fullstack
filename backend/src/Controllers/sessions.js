const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth");

module.exports = {
    async store(req,res){
        const { email, password } = req.body;

        //Verificar se o usuário existe
        // SELECT * FROM uesers WHERE email = email;
        const user = User.findOne({
            where: {
                email: email
            }
        });

        //Se a senha está correta
        if(!user || user.password !== password){
            return res.status(403).send({
                error: "Usuário e/ou senha inválidos" 
            });
        }

        //gerar um token
        jwt.sign({ userId: user.id }, auth.secret, { expiresIn: "1h" });

        //enviar resposta
        res.send({
            user: {
                ra: user.ra,
                email: user.email,
                name: user.name
            },
            token
        });
    }
}