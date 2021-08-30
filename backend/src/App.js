const express = require("express");
require('./database');
const routes = require('./routes')
const app = express();

//Dizemos para o express que ele pode aceitar Json
app.use(express.json());

app.use(routes);

module.exports = app //Exportando o app
