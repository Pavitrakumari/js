/*****************************************************************************************************
*  Execution       :   1. default node         cmd> node STACK.js 
*        
*  Purpose         :  Banking program which is done by stack implemented using Linked List

* 
*  Description    
* 
*  @file           : stack.js
*  @overview       : Banking program which is done by stack implemented using Linked List
*  @module         : stack.js- This is optional if expeclictly its an npm or local package
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.0
*  @since          : 06-09-2018
*
***********************************************************************************************************/

var EX = {};

/*
 * Linked List node with item object and next pointer to another node
 */
EX.StackNode = function () {
    this.item = null;
    this.next = null;
}

EX.LinkedStack = function () {
    var head = null;
    var size = null;

    /**
     * Push function
     * itereate through the list and then add the node to the last node in the list
     */
    this.pushToStack = function (item) {
        var node = new EX.StackNode();
        node.item = item;
        node.next = null;
        if (size < 1 && head === null) {
            head = node;
            head.next = null;
            size = 1;
        } else {
            var current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
            size += 1;
        }
    }

    /**
     * Pop Function
     * Iterate through the list and grab the last item and remove it from list
     */
    this.popFromStack = function () {
        var current = head;
        if (size === 0) {
            return;
        }
        if (size === 1) {
            head = null;
            size = 0;
            return current;
        }
        var prev = current;  // 543
        while (current.next !== null) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        size -= 1;
        return current;
    }

    // Function to check if stack is empty
    this.isStackEmpty = function () {
        return (size < 1) ? true : false;
    }

    // Function to get top item of the stack
    this.stackTop = function () {
        var current = head;
        if (size > 0 && head !== null) {
            while (current.next !== null) {
                current = current.next;
            }
            return current.item;
        } else {
            console.log("There is no stock  in the stack");
            return null;
        }
    }

    this.printStack = function () {
        var current = head;
        while (current.next !== null) {
            console.log("stock " + current.item + " is on the stack.");
            current = current.next;
        }
        console.log("stock " + current.item + " is on the stack.");
    }

}


var fs = require('fs')
var prompt = require('prompt-sync')();
var stack = new EX.LinkedStack();
const util = require('util');


//var array = [];
var k;

class StockAccount {
    constructor(stockname, numberofshare, shareprice) {/**constructor is used to initialize the object  */
        this.stockname = stockname;
        this.numberofshare = numberofshare;
        this.shareprice = shareprice;
    }

    //to buy shares
    buy() {
        var stock = prompt('enter number of stocks: ');
        for (var i = 1; i <= stock; i++) {
            var name = prompt('enter the name: ');
            var number = prompt('enter the number of share: ');
            var price = prompt('enter the price: ');
            var object = {
                stockname: name,
                shares: number,
                price1: price

            }
            var z = util.inspect(object);//inspect returns object as it is

            stack.pushToStack(z);/**push the object into the stack */

            stack.printStack();/**print the stack after pushing the object */
            
        }


    }
    //logic for selling
    sell() {
        

        stack.popFromStack();/**As it is implemented by stack using linked list,it will sell the last stock from the stockaccount */
        stack.printStack();/**print the stack after removing the last element from the stack */
    }
}

var obj = new StockAccount();/**creating an object to stackaccount */
while (1) {
    console.log('1.Buy the  Stocks');
    console.log('2.Sell the Stocks');
    //console.log('3.Print the Stock Report');
    console.log('3.Exit');
    var choice = prompt('choose an option to perform desired operation :');
    switch (choice) {
        case '1': obj.buy()
            break;
        case '2': obj.sell()
            break;

        case '3': process.exit()
            break;

        default: console.log('No Such Option ')
            break;
    }
}







