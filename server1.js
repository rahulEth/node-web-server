const express= require("express");
const hbs  = require('hbs');
var app = express();
const fs  = require('fs');
 
hbs.registerPartials(__dirname + '/views/partial')
app.use((req , res, next) => 
{
    var now = new Date().toString();
    var log  = `${now}: ${req.method} ${req.url}`
    console.log(log);

    fs.appendFile('server.log',log + '\n' , (err) => {
        if(err)
        {
            console.log("enable to append the server.log");
        }
    }  );
    //console.log(`${now}: ${req.method} ${req.url}`);
next();
});
app.use((req, res ,next) =>{

    res.render('maintenance.hbs');
});

app.set('view engine' , 'hbs')
app.get('/' , (req , res)=>  {
res.render('home.hbs' , 
{
homePage : "home page",
welcome : "welcome to home page of hbs",
currentYear : new Date().getFullYear()
});

} ); 

app.get ('/about' , (req, res) =>{

    res.render('about.hbs', 
{
pageTitle :'About page'  ,
currentYear: new Date().getFullYear()

});
});

app.listen(3000 , () => {
    console.log('server running on 3000 ' )
});