/******************************************************************************
     *  Execution       :   1. default node         cmd> node findyournumber.js 
     *                      
     * 
     *  Purpose         :takes a command line argument N,asks you to think of  a number between 0 and N-­1,where N=2^n,and always guesses the answer with n questions.
     * 
     *  @description    
     * 
     *  @file           : findyournumber.js
     *  @overview       : findyournumber module to take a command­line argument N,asks you to think of a number between 0 and N-­1,where N=2^n,& always guesses the answer with n questions. .
     *  @module         : findyournumber - This is optional if expeclictly its an npm or local package
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
function findyournumber() {

    read.question("enter starting range : ", function (i) {
        var r=Math.pow(2,i);
        //read.question("enter ending number  : ", function (r) {
            if (isNaN(i,r))
                {
                    console.log("Plzz enter a numeric value....");
                }
                else 
                {
                    utility.findyournumber(i,r);
                    read.close();
                }
            });

        
    }

findyournumber();