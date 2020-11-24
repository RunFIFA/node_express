var mongoose=require('./db.js');


var UserSchema=mongoose.Schema({
    name:String,
    passwd:String,
    age:Number,
    status:{
        type:Number,
        default:1   
    }
})

module.exports=mongoose.model('User',UserSchema,'user');
