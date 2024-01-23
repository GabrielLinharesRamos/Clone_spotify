const { Router } = require('express');
const SessionController = require('./controllers/SessionController');
const routes = new Router();

routes.post('/sessions', SessionController.store.bind(SessionController));

routes.get('/test',(req,res)=>{
    return res.json({ola:"mundo"})
})

routes.get('/buscaSessao',SessionController.buscaHomeUserEmail.bind(SessionController))

routes.get('/buscaSessaoLogin',SessionController.buscaHomeUser.bind(SessionController))

module.exports = routes;