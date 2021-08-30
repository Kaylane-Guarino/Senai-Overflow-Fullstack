const routes = require('express').Router();

const postController = require('./Controllers/posts');
const sessionController = require('./Controllers/sessions');
const userController = require('./Controllers/users');

routes.post('/sessions');

// app.get('/posts', postController.index);
routes.post('/sessions', sessionController.store);
routes.post('/users', userController.store);
routes.get('/posts', postController.index);

module.exports = routes;