var nodemailer = require("nodemailer")

export default async function  handler(req, res) {
    const {email, name, message}= req.body
    var transporter = nodemailer.createTransport({
      service:"Gmail",
      auth:{
    
      }
    })
    var mailOptions = {
      from:email,
      to:"eli092011@gmail.com",
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
  