/******************************************************************************
     *  Execution       :   1. default node         cmd> node merge.js 
     *        
     *  Purpose         : Recursively sort the 2 sub-arrays & merge them to produce a sorted result. 
     * 
     *  @description    
     * 
     *  @file           : merge.js
     *  @overview       : merge module to recursively sort 2 sub-arrays & merge them to produce a sorted result.
     *  @module         : merge.js- This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
     ******************************************************************************/

var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function merge() {
    var size = prompt("enter how many numbers in array : ");
    var arr = new Array(size);
    
    
    utility.merge(size);
    
}


merge();