const express = require('express');
const bodyParser = require('body-parser');
const passport = require("passport");
const session = require('express-session')
const morgan = require('morgan')
const path = require('path');
const cors = require('cors');

const { dbConnection } = require('../config/database');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Import other routes and paths
        this.empresa = require("../routes/empresa");
        this.producto = require("../routes/producto");
        this.venta = require("../routes/venta");
        this.vendedor = require("../routes/vendedor");
        this.detalleVenta = require("../routes/detalle-venta");
        this.cliente = require("../routes/cliente");

        // Conectar BD
        this.conectarDB();

        this.middlewares();

        this.routes();
    }

    async conectarDB (){
        await dbConnection();
    }

    middlewares(){
        // CORS Middleware
        this.app.use( cors() );
        
        // Set static folder
        this.app.use(express.static(path.join(__dirname, '/public')));

        // Body Parser Middleware
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(session({
            secret: 'sessionKey_gelsa',
            resave : false,
            saveUninitialized : false
        }))
        this.app.use(morgan('dev'));

        // Passport Middleware
        this.app.use(passport.initialize());
        this.app.use(passport.session());

    }

    routes(){


        this.app.use('/api/empresa', this.empresa);
        this.app.use('/api/producto', this.producto);
        this.app.use('/api/venta', this.venta);
        this.app.use('/api/vendedor', this.vendedor);
        this.app.use('/api/detalle-venta', this.detalleVenta);
        this.app.use('/api/cliente', this.cliente);
        
        this.app.get('***', (req, res) => {
            res.sendFile(path.join(__dirname, 'public/index.html'));
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Server started on port " + this.port);
        });
    }
}

module.exports = Server;