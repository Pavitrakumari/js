var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function bisearchnum() {
    var size= prompt("enter size of array : ");
    var arr=new Array(size);
    for(i=0;i<size;i++)
    {
       arr[i]= prompt("enter element");
          
       
       
       
       
       }
    

    
    
    utility.bisearchnum(arr);
}

bisearchnum();