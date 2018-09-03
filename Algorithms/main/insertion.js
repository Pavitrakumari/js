var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function insertionum() {
    var num = prompt("enter how many numbers in array : ");
    var arr = new Array(num);
    for (i = 0; i < num; i++) {
        arr[i] = prompt("enter element");
    }
    if (isNaN(arr)) {
        utility.insertionum(arr);

       //console.log("plzz enter only strings .....");
   }
    else {
       // utility.insertionum(arr);
        console.log("plzz enter only strings .....");

    }

}
insertionum();