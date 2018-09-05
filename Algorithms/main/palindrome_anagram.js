/******************************************************************************
     *  Execution       :   1. default node         cmd> node palindrome_anagram.js 
     *        
     *  Purpose         : Determines primme numbers that are anagram & palindrome.
     * 
     *  @description    
     * 
     *  @file           : palindrome_anagram.js
     *  @overview       : palindrome_anagram module to determine that are anagram & palindrome.
     *  @module         : palindrome_anagram.js- This is optional if expeclictly its an npm or local package
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
function palindrome_anagram() {
    read.question("enter range of last number :  ", function (range) {
        utility.palindrome_anagram1(range);
        read.close();
        });
}
palindrome_anagram();