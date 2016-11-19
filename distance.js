

var jsonfile = require('jsonfile')
var request = require('request');

var Merchantlat=[];
var Merchantlon=[];
var AtmLat=[];
var AtmLon=[];
var diff1=[];
var diff2=[];
var one=[];



request('http://api.reimaginebanking.com/merchants?lat=39.290385&lng=-76.612189&rad=15&key=7f17be1a3c2858abaa7721ee6932a046',function(err,res,body){
  if(!err&&res.statusCode==200){
  var parsedData=JSON.parse(body);
  for(var i=0;i<parsedData.data.length;i++){

 Merchantlat.push((parsedData.data[i].geocode["lat"])*( Math.PI / 180));
 Merchantlon.push((parsedData.data[i].geocode["lng"])*( Math.PI / 180));

}


  }

 
});

request('http://api.reimaginebanking.com/atms?lat=39.290385&lng=-76.612189&rad=15&key=7f17be1a3c2858abaa7721ee6932a046',function(err,res,body){
  if(!err&&res.statusCode==200){
  var parsed=JSON.parse(body);
 for(var i=0;i<parsed.data.length;i++){
  AtmLat.push((parsed.data[i].geocode["lat"])*( Math.PI / 180));
  AtmLon.push((parsed.data[i].geocode["lng"])*( Math.PI / 180));

}


}
});



 
