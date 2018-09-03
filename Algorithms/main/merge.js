var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function merge() {
    var num = prompt("enter how many numbers in array : ");
    var arr = new Array(num);
    for (i = 0; i < num; i++) {
        arr[i] = prompt("enter element");
    }
    
    utility.merge(arr);
    
}


merge();