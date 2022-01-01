const express = require('express');

const app=express();
app.use(express.json({extended: false}));
const user={
    "userId":"1",
    "name":"Parth",
    "email":"parthchoksi45@gmail.com",
    "password":"mynameisparth"
}

app.post('/',(req,res)=>{

    var req_email=req.body.email;
    var req_pass=req.body.password;
    if(req_email===user.email && req_pass===user.password)
    {
        res.status(200).json(user);
        console.log("all ok");
    }

    else
        res.status(200).json({"msg":"Invalid credentials"});

});


const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>console.log("Server started"));