var express= require('express');
var app=express();
app.use(express.static('./'));
app.get('/resume', function(req, res){
    res.sendFile('index.html',{root : __dirname});
});
app.listen(3000, function(){
    console.log('server is running');
});