var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function bisearchnum() {
    var size= prompt("enter size of array : ");
    
     var start=utility.getTime();
    utility.bisearchnum(size);
    

     var stop=utility.getTime();
    res=utility.getElapsedTime(start,stop);
   
    console.log("Elapsed Time is : "+res+" secs ");



    
}

bisearchnum();