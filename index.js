require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/amazon',(req, res)=>{
    res.send('1ST')
})
app.get('/login',(req, res)=>{
    res.send('<h1>2ND</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<center>3RD</center>')
})
app.get('/youtub',(req,res)=>{
    res.send('<center>RD</center>')
})
app.get('/youtu',(req,res)=>{
    res.send('<center>4th</center>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
