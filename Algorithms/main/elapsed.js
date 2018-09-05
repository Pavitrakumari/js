/******************************************************************************
     *  Execution       :   1. default node         cmd> node elapsed.js 
     *        
     *  Purpose         : Output the search & sorted list & print the elapsed time in descending order.
     * 
     *  @description    
     * 
     *  @file           : elapsed.js
     *  @overview       : elapsed module to output the search & sorted list & print the elapsed time in descending order.
     *  @module         : elapsed.js- This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
     ******************************************************************************/

var prompt = require('prompt-sync')();

var utility = require('/home/administrator/js/Algorithms/utility/utility.js');

function elapsed()
{
    var size=prompt("enter the size of array : ");
    
    
     start=utility.getTime();
     utility.bisearchnum(size);
     stop=utility.getTime();
     res1=utility.getElapsedTime(start,stop);
     console.log(" Elapsed time of binary search method for integers is : "+res1+" secs");

    start = utility.getTime();
    utility.bisearchstring(size);
    stop = utility.getTime();
    res2 = utility.getElapsedTime(start, stop);
    console.log(" Elapsed time for binary search for strings is : " + res2 + " secs");


    start = utility.getTime();
    utility.insertionum(size);
    stop = utility.getTime();
    res3 = utility.getElapsedTime(start, stop);
    console.log(" Elapsed time for Insertion sort for integers is : " + res3 + " secs");


    start = utility.getTime();
    utility.insertionstring(size);
    stop = utility.getTime();
    res4 = utility.getElapsedTime(start, stop);
    console.log(" Elapsed time for Insertion sort for strings is : " + res4 + " secs");
    


    start = utility.getTime();
    utility.bubblenum(size);
    stop = utility.getTime();
    res5 = utility.getElapsedTime(start, stop);
    console.log(" Elapsed time for Bubble sort for integers is : " + res5 + " secs");
    

    start = utility.getTime();
    utility.bubblestring(size);
    stop = utility.getTime();
    res6 = utility.getElapsedTime(start, stop);
    console.log(" Elapsed time for Bubble sort for strings is : " + res6 + " secs");

    
    
    var arr=[res1,res2,res3,res4,res5,res6]
    arr=arr.sort(function(a,b){
        return b-a;
    });
    console.log();
    console.log();
    console.log();

    console.log(" Elapsed time in descending order is : "+arr);

}
elapsed();