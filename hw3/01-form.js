// Enter your code here
const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res)=> {

    res.sendFile(__dirname+'/'+'index.html');
    

})

app.post('/submit',(req,res)=>{
    res.status(200);
    res.send("name :"+ req.body.name+'</br>'+ "email: "+req.body.email+'</br>'+ "comment :"+req.body.else) ;
})



app.listen(port,()=>{
    console.log('server runing at http://localhost:8080');
});