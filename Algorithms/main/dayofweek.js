/******************************************************************************
     *  Execution       :   1. default node         cmd> node dayofweek.js 
     *                      
     * 
     *  Purpose         : Determine day of week using Gregorian calender
     * 
     *  @description    
     * 
     *  @file           : dayofweek.js
     *  @overview       : dayofweek module to determine day of week using Gregorian calender.
     *  @module         : dayofweek - This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari<pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
 
     ******************************************************************************/
var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');


function dayofweek()
 {
    var day = prompt("enter the day : ");
    day=parseInt(day);
    if(day>31)
    {
        console.log("plzz enter correct date....");
        return;
    }
     var month = prompt("enter the month : ");
    month=parseInt(month);
    if(month>12)
    {
        console.log("plzz enter correct month.......");
        return;
    }
    var year = prompt("enter the year : ");
    year=parseInt(year);
    utility.dayofweek(day,month,year);
}
dayofweek();