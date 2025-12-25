require("dotenv").config();
const express = require("express");
const app = express();
const cors=require('cors')
const fs=require('fs')

app.use(cors())
const port = process.env.PORT || 3000;


app.get('/api/reports',(req,res)=>{
    const data=JSON.parse(fs.readFileSync('./data.json','utf-8'))
    res.json(data.reports)
})

app.listen(port, () => console.log(`server started at ${port}`));
