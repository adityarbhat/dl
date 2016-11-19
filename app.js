

var jsonfile = require('jsonfile')
var request = require('request');
var MerchantZipcode=[];
var AtmZip=[];
var MerchantName=[];


request('http://api.reimaginebanking.com/merchants?lat=39.290385&lng=-76.612189&rad=15&key=7f17be1a3c2858abaa7721ee6932a046',function(err,res,body){
  if(!err&&res.statusCode==200){
  var parsedData=JSON.parse(body);
for(var i=0;i<parsedData.data.length;i++){
//MerchantZipcode.push(parsedData.data[i].address.zip);
//MerchantName.push(parsedData.data[i].name);
var obj1=parsedData.data;

  }var file = '/Users/adityabhat/Documents/dalaleague/merchant1.json'
 
jsonfile.writeFile(file, obj1, function (err) {
  console.error(err)
});

  }
});

request('http://api.reimaginebanking.com/atms?lat=39.290385&lng=-76.612189&rad=15&key=7f17be1a3c2858abaa7721ee6932a046',function(err,res,body){
  if(!err&&res.statusCode==200){
  var parsed=JSON.parse(body);
 for(var i=0;i<parsed.data.length;i++){
//AtmZip.push(parsed.data[i].address.zip);
//ATMname.push(parsed.data[i].name);
//ATMGeoCode.push(parsed.data[i].geocode);
var obj=parsed.data;

}
var file = '/Users/adityabhat/Documents/dalaleague/atm1.json'
 
jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
});

  }
  });

 //
 request('http://api.reimaginebanking.com/merchants?lat=38.989697&lng=-76.937760&rad=15&key=7f17be1a3c2858abaa7721ee6932a046',function(err,res,body){
  if(!err&&res.statusCode==200){
  var parsedData=JSON.parse(body);
for(var i=0;i<parsedData.data.length;i++){
//MerchantZipcode.push(parsedData.data[i].address.zip);
//MerchantName.push(parsedData.data[i].name);
var obj2=parsedData.data;

  }var file = '/Users/adityabhat/Documents/dalaleague/merchant.json'
 
jsonfile.writeFile(file, obj2, function (err) {
  console.error(err)
});

  }
});

request('http://api.reimaginebanking.com/atms?lat=38.9283&lng=-77.1753&rad=15&key=7f17be1a3c2858abaa7721ee6932a046',function(err,res,body){
  if(!err&&res.statusCode==200){
  var parsed=JSON.parse(body);
 for(var i=0;i<parsed.data.length;i++){
//AtmZip.push(parsed.data[i].address.zip);
//ATMname.push(parsed.data[i].name);
//ATMGeoCode.push(parsed.data[i].geocode);
var obj2=parsed.data;

}
var file = '/Users/adityabhat/Documents/dalaleague/atm.json'
 
jsonfile.writeFile(file, obj2, function (err) {
  console.error(err)
});

  }
  });
