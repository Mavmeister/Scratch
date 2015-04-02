// This is a nonsensical creation of a function parsing the results of another function
// to look for a string. 
var randomNum, theDay, rightnow 

randomNum = (Math.random());
rightnow = new Date();

var myFunc = function(){
  var oTT = ((randomNum * 100)+1);
  var myArr = [];
  for (var i = 0; myArr.length < 1; i++ ){
    myArr.push(Math.ceil(oTT));
}
    theDay = rightnow.getDay();
    var dayNames = [
        "Sun", "Mon", "Tues",         "Wed",               'Thurs', 'fri', 'sat']

    var full = ("Your magic number is "+myArr+", and the day is "+ dayNames[theDay] );}


var ranDay = (Math.floor(randomNum * 6) + 1);
var aDay   = rightnow.getDay();

happyDay = function(){
  if (aDay === ranDay){
    console.log("WOOO! HIT THE JACKPOT!")
  }
  else
    {console.log("NO");} 
  };

var Bob = myFunc.toString();
var Looking = function(senty){
  var testIndex = senty.indexOf("Thurs");
  if (testIndex !== -1){
    console.log("THURSDAY");
  }
    }
happyDay();        
Looking(Bob);













           
           
           
           
           


//












           
           
           
           
           

