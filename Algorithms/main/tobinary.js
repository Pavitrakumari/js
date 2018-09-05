/******************************************************************************
     *  Execution       :   1. default node         cmd> node tobinary.js 
     *                      
     * 
     *  Purpose         : Determines binary representation of the given decimal number.
     * 
     *  @description    
     * 
     *  @file           : tobinary.js
     *  @overview       : tobinary module to determines binary representation of given decimal number.
     *  @module         : tobinary - This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari<pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
     ******************************************************************************/
var readLine = require('readline');
var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


var read = readLine.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function tobinary() {
    read.question("enter a decimal number to covert into binary : ", function (d) {  //We need to give a numeric value to convert into binary
        if (isNaN(d)) 
        {
            console.log("Plzz enter a numeric value....");
        }
        else
         {
            utility.tobinary(d);
            read.close();
        }
    });
}
tobinary();