/******************************************************************************
     *  Execution       :   1. default node         cmd> node gambler.js 
     *                      
     * 
     *  Purpose         : Determines whether win% & loss %
     * 
     *  @description    
     * 
     *  @file           : gambler.js
     *  @overview       : gambler module to determine win % & loss %.
     *  @module         : gambler - This is optional if expeclictly its an npm or local package
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
        
            //read.question("enter no.of year : ", function (r) {


            if (isNaN(c)) 
            {
                console.log("Plzz enter a numeric value....");
            }
            else {
                utility.sqrt(c);
                read.close();
            }
        });

    
}

sqrt();