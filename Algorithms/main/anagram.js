/******************************************************************************
     *  Execution       :   1. default node         cmd> node anagram.js 
     *        
     *  Purpose         :  To check whether 2 strings are anagram or not.
     * 
     *  @description    
     * 
     *  @file           : anagram.js
     *  @overview       : anagram module to check whether 2 strings are anagram or not.
     *  @module         : anagram.js- This is optional if expeclictly its an npm or local package
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
function anagram() {
    read.question("enter first string : ", function (s1) {
        read.question("enter second string :  ", function (s2) {


                a=s1.toUpperCase();    //convert the given string into uppercase
                b=s2.toUpperCase();    //convert the given string into uppercase 
                utility.anagram(a,b);   //pass the 2 strings which are converted into uppercase to anagram function so that comparision will be easy
                read.close();
            
        
        });
    });
}
anagram();