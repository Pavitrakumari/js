/******************************************************************************
     *  Execution       :   1. default node         cmd> node sqrt.js 
     *                      
     * 
     *  Purpose         : Determines square root of a non-negative number using Newton's Method.
     * 
     *  @description    
     * 
     *  @file           : sqrt.js
     *  @overview       : sqrt module to determines square root of a non-negative number using Newton's Method
     *  @module         : sqrt - This is optional if expeclictly its an npm or local package
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
function sqrt() {
    read.question("enter a number to find square root: ", function (c) {
        if (isNaN(c)) 
        {
                console.log("Plzz enter a numeric value....");
        }
        else
        {
                utility.sqrt(c);
                read.close();
        }
    });
}
sqrt();