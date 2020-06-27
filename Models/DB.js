const  mongoose  = require('mongoose');

var mongodb =  "mongodb://127.0.0.1/product";
mongoose.connect(mongodb, { useNewUrlParser: true } );




var db = mongoose.connection ;
console.log('connecter');



