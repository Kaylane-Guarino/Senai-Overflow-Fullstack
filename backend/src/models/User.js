const {Model, DataTypes} = require("sequelize");

//Mapeamos a tabela do banco
class User extends Model{
    //Dois métodos estátios por padrão, e iremos reescrevê-los
    static init(connection){
        super.init(
            {
                //Pegamos apenas os valores mutáveis!
                nome: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING
            },
            {
                //É OBRIGATÓRIO PASSAR A CONEXÃO

                
               sequelize: connection
            }
        )
    }

    static associate(models){
        //Um usuário tem muitos posts
        this.hasMany(models.Post);
    }
}

module.exports = User;