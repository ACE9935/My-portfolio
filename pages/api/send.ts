const validator = require('validator');
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend';
import MagicLinkEmail from './email';

const resend = new Resend(process.env.RESEND_API_KEY);

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
    
     await resend.emails.send({
      from: `noreply@trueflowing.com`,
      to: "anaselmouden99@gmail.com",
      subject: `You have a new message +1`,
      react: MagicLinkEmail({name,email,text:message})
    })

    console.log('Message sent successfully!')
    return res.status(401).json({message:'Message sent'})
  }
  catch{
    console.log(error)
    return res.status(401).json({error})
  }
  };
