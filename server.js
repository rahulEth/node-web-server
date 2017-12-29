const express = require('express')
const fs = require('fs');
//const hbs = require('hsb');

const port = process.env.PORT || 3000;

var app = express();
 app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) =>{

//res.send("Hello Express");
res.send({
name : "rahul" ,
like: ['apple', 'mangos']

})
} );
app.get('/about', (req, res) =>{
    res.send("page about");
} );
app.get('/bad' , (req, res) => {

    res.send({
        Errormessage : "enable to handle the data"
    });
})

app.listen(port,() =>{
    console.log(`now server is up on port ${3000}`);
} ) ;