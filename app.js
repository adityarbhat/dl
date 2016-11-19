
var express=require("express");
var app=express();

var request = require('superagent');
request.get('http://api.reimaginebanking.com/merchants?lat=38.989697&lng=-76.937760&rad=5&key=7f17be1a3c2858abaa7721ee6932a046').end(function(res){
   foo(res.status);
    bar(res.body); 
});