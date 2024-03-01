const nodemailer = require("nodemailer");
const validator = require('validator');
import type { NextApiRequest, NextApiResponse } from 'next'

const variableValue = process.env.PWD;

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: 'anaselmouden99@gmail.com',
      pass:variableValue,
    },
    tls: {
        rejectUnauthorized: false
    }

  });

  interface ExtendedNextApiRequest extends NextApiRequest {
    body:
    {messageInfo: {
      name:string
      email:string
      message:string
      }
}
  }

interface error {
  name: null | string;
  email: null | string;
  message: null | string;
}

  export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse){
    let {name,email,message}=req.body.messageInfo
    let error:error={name:null,email:null,message:null}
    console.log("Sending...");
    try{
    if(name.length==0) name='Anonymous'
    if(!validator.isEmail(email)) error.email='Email is not Valid'
    if(message.length<10) error.message='Message is too short'
    if(error.name || error.email || error.message) throw error
    transport.sendMail({
      from: 'anaselmouden99@gmail.com',
      to: 'anaselmouden99@gmail.com',
      subject: "Message from: "+name+' | Email: '+email,
      html: message,
    }).catch((err:any) => console.log(err));

    transport.sendMail({
      from: 'anaselmouden99@gmail.com',
      to: email,
      subject: "Thanks for reaching me out",
      html: "<p>Thank you for reaching out to me! I appreciate you taking the time to contact me through my website. Your message has been received, and I want to assure you that I'll adress a respnse as quick as possible.<br><br>Anas<p/>",
    }).catch((err:any) => console.log(err));

    console.log('Sent')
    return res.status(401).json({message:'Message sent'})
  }
  catch{
    console.log(error)
    return res.status(401).json({error})
  }
  };
