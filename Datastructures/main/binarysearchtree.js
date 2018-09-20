/*********************************************************************************************************
 *  Execution       :   1. default node         cmd> node binarysearchtree.js 
 * 
 *  Purpose         : To print the calendar of the given month and year.
 * 
 *  @description    
 * 
 *  @file           : binarysearchtree.js
 *  @overview       : To print the calendar of the given month and year
 *  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
 *  @version        : 4.2.1
 *  @since          : 11-09-2018
 *
 **********************************************************************************************************/

var readLine = require('readline');
var utility = require('/home/administrator/js/Datastructures/utility/binarysearchtree.js');
var prompt = require('prompt-sync')();


var read = readLine.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function binaryTree() {
    read.question("enter the size of elements you want into the binary search tree : ", function (n) {/**enter the size of the numbers you want to enter into the binary search tree */
        if (isNaN(n)) {
            console.log("Plzz enter a numeric value....");/**the size should be only numeric value */
            binaryTree();
        }
        else {
            for(var i=0;i<=n;i++)
            {
                var node=prompt("Enter the number into the binary search tree : ");
                if(isNaN(node))
                {
                    console.log("Please give only numeri values to enter into the binary search tree........");
                    binaryTree();
                }
                else{
                utility.binaryTree(node);
                }

            }
        
            read.close();
        }
    });
}
binaryTree();