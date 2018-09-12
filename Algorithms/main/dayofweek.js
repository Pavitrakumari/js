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
    var month = prompt("enter the month : ");
    month=parseInt(month);
    var year = prompt("enter the year : ");
    year=parseInt(year);
    if (day >= 1 && day < 32 && month >= 1 && month < 13) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            utility.dayofweek(day,month,year);
        }
        else if (day == 29 && month == 2) {
            console.log("invalid");
        }
        else if ((month == 4 || month == 6 || month == 9 || month == 11) && day >= 31) {
            if (day >= 1 && day < 32 && month >= 1 && month < 13) {
                if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                    utility.dayofweek(day,month,year);
                }
                else if (day == 29 && month== 2) {
                    console.log("invalid");
                }
                else if ((month== 4 || month== 6 || month == 9 || month == 11) && day >= 31) {
                    console.log("invalid");
                }
                else
                    utility.dayofweek(day,month,year);
            }
            else {
                console.log("invalid");
            }
            console.log("invalid");
        }
        else
            utility.dayofweek(day,month,year);
    }
    else {
        console.log("invalid");
    }
}
dayofweek();