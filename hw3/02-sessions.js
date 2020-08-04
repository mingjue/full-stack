const express = require('express');
const session = require('express-session');
const port = 8080;
//var sess; // global session

var app = express();
app.use(session({
    'store': new session.MemoryStore(),
    'secret': 'a secret to sing the cookie',
    'resave':false,
    'saveUninitialized':false,
    'cookie':{
        'maxAge':86400000
    }
}))

app.get('/patrick', ( req, res) => {
    
    var router = 'patrick'
    //sess = req.session;
    fecthContent(req,res,router)
});

app.get('/sandy', ( req, res) => {
    
    var router = 'sandy'
    fecthContent(req,res,router)
});

app.get('/spongebob', ( req, res) => {
    var router = 'sandy'
    fecthContent(req,res,router)
});

app.get('', ( req, res) => {
    var router = ' /'
    fecthContent(req,res,router)
});


app.get('/pearl', ( req, res) => {
    var router = ''
    fecthContent(req,res,router)
});

app.get('/pearl', ( req, res) => {
    var router = ''
    fecthContent(req,res,router)
});

app.get('/plankton', ( req, res) => {
    var router = ''
    fecthContent(req,res,router)
});

function fecthContent(req,res,router){
    var text;
    try{
        if(req.session.page_views){
            req.session.page_views.push(router)
            console.log(`if condition ${req.session.page_views}`)
            console.log(`in the if condition`)
            text = `currently on route: /${router} <br>`
            text += 'Previously visited:<br>'
            for( var value of req.session.page_views){
                text += `/${value}<br>`
            }
        }else{
            req.session.page_views = []
            console.log(`in the else condition ${req.session.page_views}`)
            req.session.page_views.push(router);
            text =`currently on route:${router} <br> Welcom to http://localhost:5000/`;
        }
        res.send(text)
    }catch(err){
        console.log(`error occured : ${err}`);
    }
}

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})