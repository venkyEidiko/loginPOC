const config = require('config');
const nodemailer = require('nodemailer');

let sendingMail = (userName, userMail, userPass) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.get('auth.mail'),

            Pass: config.get('auth.pass')
        }
 });

    var mailOption = {
        from: config.get('auth.mail'),
        to: userMail,
        subject: 'Greetings from the venky ',
        test: `Hello  ${userName},

    congratulations! you have succeesfully created your account.

              we do hope your doing well and good. we always here to help you in best way
    if you have any quareis feel free to ask in your accout.Here I'm you've accout details.          
    
    Name     :${userName}
    Email Id : ${userMail}
    Password : ${userPass}
            
                Thanks for your time and have a greate day ahead of you.


   Regards,
   The whiteDevil,
   ${config.get('auth.mail')}
    `
    }
    transporter.sendMail(mailOption, function (error, info) {
        if (error){
            // console.log(config.get(name+ " "+ mail +" "+ pass ));
            // console.log(config.get(name+ " "+ mail +" "+ pass ));
// console.log( config.get('auth.pass'))
// console.log( config.get('auth.mail'))

            console.log("Some where went wrong :::" + error);
            console.log("    ....."+info)
        }
        else {


            console.log();
        }
    })




}


module.exports = { sendingMail };