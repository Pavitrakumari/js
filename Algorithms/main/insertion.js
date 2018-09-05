/******************************************************************************
     *  Execution       :   1. default node         cmd> node insertion.js 
     *        
     *  Purpose         :   Sort the words in the string array using Insertion sort.
     * 
     *  @description    
     * 
     *  @file           : insertion.js
     *  @overview       : insertion module to sort the words in the string array using insertion sort.
     *  @module         : insertion.js- This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
     ******************************************************************************/

var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function insertionum()
{
    var size = prompt("enter how many numbers in array : ");
    utility.insertion(size);
}
insertionum();