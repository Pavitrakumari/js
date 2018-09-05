/******************************************************************************
     *  Execution       :   1. default node         cmd> node binary.js 
     *                      
     * 
     *  Purpose         : i)Swap nibbles & find the new number 
     *                    ii)Find the resultant number is the power of 2
     *  @description    
     * 
     *  @file           : binary.js
     *  @overview       : binary  module to swap 2 numbers & find if the resultant number is power of 2.
     *  @module         : binary - This is optional if expeclictly its an npm or local package
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
function binary() {
    read.question("enter a number : ", function (n) {
        if (isNaN(n))
         {
            console.log("Plzz enter a numeric value....");
        }
        else 
        {
            utility.binary(n);
            read.close();
        }
    });
}
binary();