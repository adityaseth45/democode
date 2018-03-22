var express=require('express');
var app=express();

app.get('/',function(request,response){
    response.sendFile(__dirname+'/index.html');
});

var port= process.env.PORT || 3000;

app.listen(port,function(req, res){
    console.log("system running on port"+port);
});
