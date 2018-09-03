var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function tempcon1() {
    var choice = prompt("enter your choice :   1.celsius to fahrenheit conversion      2.Fahrenheit to celsius conversion : ");
    if(choice==1)
    {
        var c=prompt("enter the temperature in celsius to convert into fahrenheit : ");
        utility.tempcon(c);
    }
    else if(choice==2)
    {
        var f=prompt("enter the temperature in fahrenheit to convert into celsis : ");
        utility.tempcon1(f);
    }
    else{
        prompt("Plzz enter only valid choice.......");
    }



    }




    


tempcon1();