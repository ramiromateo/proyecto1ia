const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
//si en dado caso existe un puerto predefinido que utilice ese, de lo contrario que utilice el puerto 3000
app.set('port', process.env.PORT || 3000);  

//middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json({ limit: '50mb' }));

//routes
app.use(require('./routes'));
app.use('/api',require('./routes/users'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});