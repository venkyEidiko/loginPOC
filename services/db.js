
const mongoose=require('mongoose');
const config=require('config');

var host=config.get('db.host');
var port=config.get('db.port');
var db=config.get('db.name');

// mongoose.connect(`mongodb://${host}:${port}/${db}`);
mongoose.connect("mongodb+srv://sarasu10:<password>@cluster0.12vww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority;");


const conn=mongoose.connection;

conn.on('open',()=>{
    console.log('DB connected...');
});