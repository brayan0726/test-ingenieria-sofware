const nodemailer = require("nodemailer");

const mail ={
    user:'brayan.burg@hotmail.com',
    pass:'Celular07'
};


var transporter = nodemailer.createTransport(({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    //service: 'gmail',
    //host: 'smtp.gmail.com',
    auth: {
      user: mail.user,
      pass: mail.pass
    }
  }));


    const sendEmail= async (email,subject,text)=>{
      try {
        await transporter.sendMail({
            from: `NTT: <${mail.user}>`, // sender address
            to: email, // list of receivers
            subject, // Subject line
            text: text
          });
          
      } catch (error) {
          console.log('error en el email ',error);
      }
  };


   module.exports ={ sendEmail };