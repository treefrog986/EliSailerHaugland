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

    transporter.sendMail(mailOptions)
    return res.status(200).json({status:"Success"})
  }
  catch(error){
    return req.status(500).json({error})
  }
  }
  