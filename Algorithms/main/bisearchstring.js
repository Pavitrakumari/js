var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function bisearchstring() {
    var num = prompt("enter how many strings in array : ");
    var arr = new Array(num);
    for (i = 0; i < num; i++) {
        arr[i] = prompt("enter strings ");
    }
    var sea = prompt("enter the search string ");
    


        var index = utility.bisearchstring(arr,sea);
        if (index > -1) {
            console.log("the string  is present in the index : " + index);
        }
        else {
            console.log("the string is not found in the given input");
        }
    
        
    
   
}

bisearchstring();