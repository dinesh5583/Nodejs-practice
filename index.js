// let http = require('http')
let express = require('express')
let bodyParse = require('body-parser')

const app=express();
app.use(bodyParse.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>")
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    // console.log('<h1>Hello From Express</h1>');
    res.send('<h1>Hello From Express</h1>')
})
// app.use((req,res,next)=>{
//     console.log('In The Middlwware');
//     next()
// })
// const server=http.createServer(app);
app.listen(4001)



//Without expressjs
// let fs=require('fs');
// // fs.writeFileSync('test.txt','Hello 1234')
// const server=http.createServer((req,res)=>{
//     console.log(req);
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>')
//     res.write('<head> <title>My First Page</title></head>');
//     res.write('<body><h1>Hello Dinesh</h1></body>');
//     res.write('</html>');
//     // res.end();
//     res.statusCode=302;
//     res.setHeader('Location','/')
//     return res.end();
// })
// server.listen(4001)
