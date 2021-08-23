const {Model, DataTypes} = require("sequelize");

//Mapeamos a tabela do banco
class Post extends Model{
    //Dois métodos estátios por padrão, e iremos reescrevê-los
    static init(connection){
        super.init(
            {
                title: DataTypes.STRING,
                description: DataTypes.STRING,
                image: DataTypes.STRING,
                gist: DataTypes.STRING,
            },
            {
                //É OBRIGATÓRIO PASSAR A CONEXÃO
                connection
            }
        )
    }

    static associate(models){

    }
}

module.exports = Post;