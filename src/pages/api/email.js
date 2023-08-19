import { resolve } from "styled-jsx/css"

var nodemailer = require("nodemailer")

export default async function  handler(req, res) {
    const {email, name, message}= req.body
    try{
    var transporter = nodemailer.createTransport({
      service:"Gmail",
      auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
      }
    })
    await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

    var mailOptions = {
      from:email,
      to:process.env.EMAIL,
      subject:"You have an email",
      text: `
      ${name} sent you an email

      Email (if provided): ${email}

      ${message}
      `
    }
await new Promise((res, rej)=>{
  transporter.sendMail(mailOptions, (error, info)=>{
      if(error){
       reject(error)
      } else{
        resolve(info)
      }
    })
})
  
    return res.status(200).json({status:"Success"})
  }
  catch(error){
    return req.status(500).json({error})
  }
  }
  