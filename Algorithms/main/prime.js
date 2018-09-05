/******************************************************************************
     *  Execution       :   1. default node         cmd> node prime.js 
     *        
     *  Purpose         : Determine prime numbers in the range 0-1000.
     * 
     *  @description    
     * 
     *  @file           : prime.js
     *  @overview       : prime module to determine prime numbers in the range 0-1000.
     *  @module         : prime.js- This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
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
function prime() {
   
        read.question("enter index :  ", function (range) {
              utility.prime(range);
             read.close();
            });
        }
prime();