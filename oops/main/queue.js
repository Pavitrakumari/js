/*****************************************************************************************************
*  Execution       :   1. default node         cmd> node queue.js 
*        
*  Purpose         :  Maintain DateTime of the transaction in a Queue implemented using Linked list

* 
*  Description    
* 
*  @file           : queue.js
*  @overview       : Maintain DateTime of the transaction in a Queue implemented using Linked list
*  @module         : queue.js- This is optional if expeclictly its an npm or local package
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.0
*  @since          : 06-09-2018
*
***********************************************************************************************************/
const util = require('util');

var utility1 = require('/home/administrator/js/Datastructures/utility/utility.js')
var utility2 = require('/home/administrator/js/Datastructures/utility/utility3.js')
var prompt = require('prompt-sync')();
var q = new utility2();
var prompt = require('prompt-sync')();
var d = new Date();/**creating an object for Date class */
class StockAccount {
    buy() {     /**add shares of stock to account */
        var stock = prompt('enter number of stocks: ');
        for (var i = 1; i <= stock; i++) {
            var name = prompt('enter the name: ');
            var number = prompt('enter the number of share: ');
            var price = prompt('enter the price: ');

            var date = (d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear());/**getting the date from date class */
            var time = (d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());/**getting current time from system */


            let user = {       /**creating an object for all the inputs */
                name: name,
                number: number,
                price: price,
                date: date,
                time: time
            };
            var z = util.inspect(user);


            console.log('Successfully purchased the stock on ' + d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear() + ' at ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

            q.enqueue(z);/**add element into the queue */
        }
    }

    sell() {/**selling method performs deleting operation */
        
       // i = prompt('which index u want to sell ? : ');

            var res = q.dequeue(i);
            console.log(res);
        }
    
    stockList() {
       var  print=q.printQueue();
        console.log(print);
    }}
var stock = new StockAccount();
while (1) {
    console.log('1.Buy Stocks');
    console.log('2.Sell Stocks');
    console.log('3.Print Stock list');
    console.log('4.Exit');
    var choice = prompt('choose an option to perform desired operation :');

    switch (choice) {
        case '1': 
            stock.buy();
            break;
        case '2': 
            stock.sell();
            break;

        case '3': 
            stock.stockList();
            break;

        case '4': process.exit()

        default: console.log('No Such Option ')
            break;
    }
}