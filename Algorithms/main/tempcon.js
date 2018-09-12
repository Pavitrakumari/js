/******************************************************************************
     *  Execution       :   1. default node         cmd> node tempcon.js 
     *        
     *  Purpose                      
     *  : conversion of temperature from fahrenheit to celsius & vice-versa.
     * 
     *  @description    
     * 
     *  @file           : tempcon.js
     *  @overview       : tempcon module to convert temperature from fahrenheit to celsius & vice-versa.
     *  @module         : tempcon.js- This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
     ******************************************************************************/

var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function tempcon1() {
    var choice = prompt("enter your choice :   1.celsius to fahrenheit conversion      2.Fahrenheit to celsius conversion : ");
    if(choice==1)                //if choice=1,then it performs celsius to fahrenheit conversion
{
        var c=prompt("enter the temperature in celsius to convert into fahrenheit : ");
        utility.tempcon(c);
    }
    else if(choice==2)           //if choice=2,then it performs fahrenheit to celsius conversion
    {
        var f=prompt("enter the temperature in fahrenheit to convert into celsis : ");
        utility.tempcon1(f);
    }
    else{
        prompt("Plzz enter only valid choice.......");
    }



    }
tempcon1();