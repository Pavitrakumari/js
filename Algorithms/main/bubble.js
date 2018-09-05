/******************************************************************************
     *  Execution       :   1. default node         cmd> node bubble.js 
     *        
     *  Purpose         : Print the sorted list.
     * 
     *  @description    
     * 
     *  @file           : bubble.js
     *  @overview       : bubble module to print the sorted list.
     *  @module         : bubble.js- This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
     ******************************************************************************/

var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function bubble() {
    
        var size = prompt("enter size of array : ");

        
        utility.bubble(size);




}


bubble();