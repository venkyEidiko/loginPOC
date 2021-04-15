
const person=require('../model/PersonSchema');

const db=require('../services/db');
const dbEmail = require('../services/email');


let add=async(email,pass,name,gender,hobbies)=>{
    try{
        console.log(email,pass,name,gender,hobbies);
    let add= await new person({pEmail:email,pPass:pass,pName:name,pGender:gender,pHobbies:hobbies}).save();
    console.log('in crud opppp')
    console.log(name+"...."+email+" ..."+pass)
    dbEmail.sendingMail(name,email,pass);
    return "your record has Added successfully!!!."
}
    catch(error){
        console.log('ERROR OCCURED :'+error);
    }
}


let find=async(email,pass)=>{
    try{
        return await person.find({pEmail:email,pPass:pass});
    }
    catch(error){
        console.log(error);
    }
}


//update Persin Details by Email
let update=async(email,name,gender,hobbies)=>{
    try{
        let update= await person.updateOne({pEmail:email},{pName:name,pGender:gender,pHobbies:hobbies});
        return "Update Succesfull."
    }
    catch(error){
        console.log(error);
    }
}


//export methods
module.exports={add,find,update}