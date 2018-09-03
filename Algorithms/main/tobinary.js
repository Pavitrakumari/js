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
function tobinary() {
    read.question("enter a decimal number to covert into binary : ", function (d) {

        //read.question("enter no.of year : ", function (r) {


        if (isNaN(d)) {
            console.log("Plzz enter a numeric value....");
        }
        else {
            utility.tobinary(d);
            read.close();
        }
    });


}

tobinary();