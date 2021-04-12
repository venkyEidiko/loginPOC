const mongoose=require('mongoose');

let personModel=mongoose.Schema({
    pEmail:{type:String,require:true,unique:true},
    pPass:{type:String,require:true},
    pName:{type:String},
    pGender:{type:String},
    pHobbies:{type:String}
});

module.exports=mongoose.model('logIn',personModel);