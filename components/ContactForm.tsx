import { TextField, Typography, useTheme, Button, Alert, AlertTitle } from "@mui/material";
import { useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import {update,unset,unsetError,submitMessage} from '../app-state/app-state'
import { AppDispatch } from "../app-state/app-store";

function ContactForm({modal,handleClose}:{modal?:boolean,handleClose?:()=>void}) {
    const theme=useTheme()
    const {error,message,success}=useSelector((state:any)=>state.message)
    const dispatch=useDispatch<AppDispatch>()

    return ( 
            <form onSubmit={(e)=>{e.preventDefault();dispatch(submitMessage({name:message.name,email:message.email,message:message.message}))}} noValidate className="shadow-xl bg-secondary p-[1rem] sm:p-[3rem] flex flex-col w-full max-w-[30rem] space-y-7">
             <p className="font-bold">Feel free to reach out to me via email at: <span className="text-main underline">anaselmouden99@gmail.com</span></p>
            {modal && <Typography variant='h4'>Send a <span className="text-main">message</span></Typography>}
            {success && <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
            Your message was sent
            </Alert>}
            <TextField
            disabled={success}
            helperText={error.name}
            error={error.name?true:false}
             value={message.name}
            onChange={(e)=>dispatch(update({field:'name',value:e.target.value}))} label="Name" variant="filled" className="!bg-slate-400 shadow-xl"/>
             <TextField
             disabled={success}
             error={error.email?true:false}
             helperText={error.email}
             value={message.email}
             onChange={(e)=>dispatch(update({field:'email',value:e.target.value}))} label="Email" variant="filled" className="!bg-slate-400 shadow-xl"/>
            <TextField label="Message"
            disabled={success}
            helperText={error.message}
            error={error.message?true:false}
            onChange={(e)=>dispatch(update({field:'message',value:e.target.value}))}
            value={message.message}
            className="!bg-slate-400 shadow-xl"
             multiline
             rows={modal?4:8}
            variant="filled"/>
            {!success && <div className="flex space-x-2">
            <input type='submit' value='SUBMIT' className="bg-main text-white p-2 rounded-md"/>
            <Button onClick={()=>{handleClose && handleClose();dispatch(unset())}} className="" variant="text">CANCEL</Button>
            </div>}
            </form>
     );
}

export default ContactForm;