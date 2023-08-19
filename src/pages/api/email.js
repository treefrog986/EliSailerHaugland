var nodemailer = require("nodemailer")

export default async function  handler(req, res) {
    const {email, name, message}= req.body
          console.log(process.env.EMAIL)
          console.log(process.env.EMAIL_PASSWORD)
    try{
    var transporter = nodemailer.createTransport({
      service:"Gmail",
      auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
      }
    })
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

    transporter.sendMail(mailOptions, (error, info)=>{
      if(error){
        return console.log(error)
      }
    })
    return res.status(200).json({status:"Success"})
  }
  catch(error){
    return req.status(500).json({error})
  }
  }
  