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
/**var readLine = require('readline');
var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


var read = readLine.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function monthlypayment() {
   // read.question("enter principal amount : ", function (p) {
     //   read.question("enter how many years : ", function (y) {
       //     rad.question("enter rate of interest r : ", function (r) {*/

                var p=process.argv[2];
                var y=process.argv[3];
                var r=process.argv[4];
                if (isNaN(p,y,r)) {
                    console.log("Plzz enter a numeric value....");
                }
                else {


                    var utility = require('/home/administrator/js/Algorithms/utility/utility.js');

                    utility.monthlypayment(p,y,r);
                    
                    }
                