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

                //Começamos aqui 25/08/2021
               sequelize: connection
            }
        )
    }

    static associate(models){
        //Esse post pode pertencer a um usuário
        this.belongsTo(models.User);
    }
}

module.exports = Post;