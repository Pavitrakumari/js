var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function bubble() {
    
        var choice = prompt("give your choice 1. binary search for Integers \n 2.binary search for strings \n 3.insertion sort \n 4.merge sort ");
    
        //var num = prompt("enter how many numbers in array : ");
    //var arr = new Array(num);
    ///for (i = 0; i < num; i++) {
     //   arr[i] = prompt("enter element : ");
   // }
    
   // var choice=prompt("give your choice 1. binary search for Integers \n 2.binary search for strings \n 3.insertion sort \n 4.merge sort ");
    switch (parseInt(choice))
    {
        case 1: bisearchnum();
                break;
        case 2: bisearchstring();
                break;
        case 3: insertion();
                break;
        case 4: bubble();
                break;
    }
}


bubble();