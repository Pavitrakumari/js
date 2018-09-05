/******************************************************************************
     *  Execution       :   1. default node         cmd> node monthlypayment.js 
     *                      
     * 
     *  Purpose         : calculates monthly payment of given principal amount
     * 
     *  @description    
     * 
     *  @file           : monthlypayment.js
     *  @overview       : monthlypayment module to calculate monthly payment of given principal amount
     *  @module         : monthlypayment - This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari<pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
     ******************************************************************************/
var p=process.argv[2];
var y=process.argv[3];
var r=process.argv[4];
if (isNaN(p,y,r))
{
     console.log("Plzz enter a numeric value....");
}
 else
{
    var utility = require('/home/administrator/js/Algorithms/utility/utility.js');
    utility.monthlypayment(p,y,r);
                    
}
                