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
    if (!req.body.else) {
        comments = "n/a";
    } else {
        comments = req.body.else;
    }
    var newsletter;
    console.log(`what's the value ${req.body.checkbox}`)
    if (req.body.checkbox) {
        console.log(`im at checkbox`)
        
        newsletter = "Yes, I would like to sign up for the newsletter.";
    } else {
        console.log(`im at else checkbox`)
        newsletter = "No, thank you.";
    }
    res.send("name :"+ req.body.name+'</br>'+ "email: "+req.body.email+'</br>'+ "comments :"+comments +"<br />" +"Newsletter: " +newsletter) ;
})



app.listen(port,()=>{
    console.log('server runing at http://localhost:8080');
});