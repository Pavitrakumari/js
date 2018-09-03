/******************************************************************************
     *  Execution       :   1. default node         cmd> node gambler.js 
     *                      
     * 
     *  Purpose         : Determines whether win% & loss %
     * 
     *  @description    
     * 
     *  @file           : gambler.js
     *  @overview       : gambler module to determine win % & loss %.
     *  @module         : gambler - This is optional if expeclictly its an npm or local package
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
function vending() {
    var index=0;
    var notes=[1000,500,100,50,20,10,5,2,1];
    read.question("enter a amount : ", function (money) {

        //read.question("enter no.of year : ", function (r) {


        if (isNaN(money)) {
            console.log("Plzz enter a numeric value....");
        }
        else {
            if(money>0){

            var money=utility.vending(money,notes,index);
            }
            else{
                console.log("Please enter only positive numbers : ");
            }
            read.close();
        }
    });


}

vending();