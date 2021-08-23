const routes = require('express').Router();
const postController = require('./Controllers/posts')
app.get('/posts', postController.index);

module.exports = routes;