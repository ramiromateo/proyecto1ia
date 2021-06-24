const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host:'mysql',
    user: 'dfase1',
    password:'Fase123',
    database:'fase1Db',
    port:'3306',
    multipleStatements:true
});
mysqlConnection.connect(function (err){
    if(err)
    {
        console.error(err);
        return;
    }else{
        console.log('db is connected');
    }
});
module.exports = mysqlConnection;
