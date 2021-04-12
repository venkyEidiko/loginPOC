
const mongoose=require('mongoose');
const config=require('config');

var host=config.get('db.host');
var port=config.get('db.port');
var db=config.get('db.name');

mongoose.connect(`mongodb://${host}:${port}/${db}`);

const conn=mongoose.connection;

conn.on('open',()=>{
    console.log('DB connected...');
});