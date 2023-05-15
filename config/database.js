
const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        const env_conn = process.env.NODE_ENV;
        const conn = ( env_conn=='local' ) ? process.env.BD_LOCAL_CNN : process.env.BD_CNN;
        // Connect to database
        mongoose.connect(conn, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log("Connected to database " + conn);
    }
    catch( error ){
        // On db error
        console.error(error);
        throw new Error('Error al iniciar la Base de Datos.')
    }

}


module.exports = {
    secret: 'gelsa',
    dbConnection
};