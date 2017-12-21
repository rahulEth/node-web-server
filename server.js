const express = require('express')

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

app.listen(3000,() =>{
    console.log("now server is up port 3000");
} ) ;