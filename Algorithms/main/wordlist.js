/******************************************************************************
     *  Execution       :   1. default node         cmd> node wordlist.js 
     *        
     *  Purpose         : Use Arrays to sort the word list and then do the binary search .
     * 
     *  @description    
     * 
     *  @file           : wordlist.js
     *  @overview       : wordlist module to Use Arrays to sort the word list and then do the binary search .
     *  @module         : wordlist.js- This is optional if expeclictly its an npm or local package
     *  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
     *  @version        : 4.0
     *  @since          : 24-08-2018
     *
     ******************************************************************************/
/*****************************************************************************
* Algorithm:-
* create a.txt file enter data in it
* Take the user input and search for the data in that file
* Search the data at which index it is present  using binarysearch
* Compare search with the mid element.
* If search matches with mid element, we return the mid index.
* Else If search is greater than the mid element, then search can only lie in right half subarray after the mid element.
* So we recur for right half.
* Else(search is smaller) recur for the left half.
****************************************************************************** */
var fs=require('fs');
var readline=require('readline');
var utility = require('/home/administrator/js/Algorithms/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var data=fs.readFileSync('file.txt');
//console.log(data);
data=data.toString().split(',');        // It converts the given data into string & then split it
function binarywordlist()
{
    //read.question("enter the element to search : ",function(sea){  //We need to give the element that need to be searched
 
                 utility.binarywordlist(data);
                 read.close();
 

}
binarywordlist();