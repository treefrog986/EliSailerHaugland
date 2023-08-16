import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function Email(){
    const [email, setEmail] = useState({
        name:"", email:"", message:""
    })
    const sendEmail = async ()=>{
        const res = await fetch("/api/email",
        {method:"POST", 
        headers:{'Content-Type':"application/json"}, 
        body:JSON.stringify(email)})
        const json = await res.json()
        console.log(json)
    }

    const changeEmail= e=>setEmail(p=>({...p, [e.target.name]: e.target.value}))
    return(<>
    <Stack >
    <p>Email</p>
    <o>Name</o>
    <TextField
    name="name"
    value={email.name}
    onChange={changeEmail}
    />
    <TextField
    name="email"
    value={email.email}
    onChange={changeEmail}
    />
    <TextField
    name="message"
    value={email.message}
    onChange={changeEmail}
    />
    <Button onClick={sendEmail}>Send</Button>
    </Stack>
    </>)
}