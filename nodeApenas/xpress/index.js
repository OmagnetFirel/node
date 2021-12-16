const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Hello World. Wellcome to my first express app");
})

app.get("/sobre", function(req, res){
    res.send("Sobre");
})
app.get("/blog", function(req, res){
    res.send("Blog");
})

//com parametro
app.get("/ola/:nome", function(req, res){
    res.send("Ola " + req.params.nome.toUpperCase());
})

app.listen(8081,function(){
    console.log("Server is running at port 8081 http://localhost:8081");
}); //ultima linha do codigo;