/******************************************************************************
     *  Execution       :   1. default node         cmd> node anagram.js 
     *        
     *  Purpose                      
     *  : Determines distinct coupon numbers.
     * 
     *  @description    
     * 
     *  @file           : couponnum.js
     *  @overview       : couponnum module to determine distinct coupon numbers.
     *  @module         : couponnum.js- This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
     ******************************************************************************/
var readLine = require('readline');
//var utility=require('./utility/utility.js');
var utility = require('/home/administrator/js/Algorithms/utility/utility.js');

var read = readLine.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function prime() {
   // read.question("enter first string : ", function (s1) {
        read.question("enter index :  ", function (index) {



            utility.prime(index);
            read.close();

        });        
    
}
prime();