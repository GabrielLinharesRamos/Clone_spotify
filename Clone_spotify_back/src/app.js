const express=require('express')
const mongoose = require('mongoose');
const routes = require('./routes')
const cors=require('cors')

class App{
    constructor(){
        this.server=express()
        
        mongoose.connect('mongodb+srv://gabriel2301:gabriel2301@projeto-spotify.unupilu.mongodb.net/?retryWrites=true&w=majority')

        this.middlewares()
        this.routes()
    }


    middlewares(){
        this.server.use(cors())
        this.server.use(express.json())
    }

    routes(){
        this.server.use(routes)
    }
}

module.exports= new App().server