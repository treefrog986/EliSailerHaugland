import { Button, Stack, TextField , Box} from "@mui/material";
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
    const rules=[
        `
        Even if you do provide an email, an email back is not guranteed. Please allow
        up to 1 week for replies if you are expecting a reply.
        `,  
        `
        This email service DOES work and WILL send a message to my inbox. Please
        note that this is not a testing form. I will receive whatever is submitted
        to this form.
        `
    ]
    const changeEmail= e=>setEmail(p=>({...p, [e.target.name]: e.target.value}))
    return(<Box display="flex"
    justifyContent="center">
    <Stack sx={{width:800}}>
    <p>Email</p>
    <p>Please note the following when sending an email</p>
    <ol>
        {rules.map((rule, index)=><li key={index}>{rule}</li>)}
    </ol>
    <o>Name</o>
    <TextField
    name="name"
    value={email.name}
    onChange={changeEmail}
    />
    <p>Email</p>
    <TextField
    name="email"
    value={email.email}
    onChange={changeEmail}
    />
    <p>Message</p>
    <TextField
    name="message"
    value={email.message}
    onChange={changeEmail}
    multiline
    rows={5}
    />
    <Button onClick={sendEmail}>Send</Button>
    </Stack>
    </Box>)
}