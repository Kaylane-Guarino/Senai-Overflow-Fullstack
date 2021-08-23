

module.exports = {
    url: "mysql://root:bcd127@localhost:3306/senai_overflow_db",
    config: {
        dialect: "mysql",
        define: {
            timestamp: true, //coloca dois campos nas tabelas (automaticamente)
            underscored: true //Seria o nome das tabelas (então aqui não será camelCase, mas underescor)
        }
    }
}