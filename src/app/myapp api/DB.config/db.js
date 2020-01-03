const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Myapp', {useNewUrlParser : true} ,(err)=>{
    if(!err){
console.log('DB connected');
    }
    else{
        console.log('err while connecting'+err);
    }
});

module.exports = mongoose;