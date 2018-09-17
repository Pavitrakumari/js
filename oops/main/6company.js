/********************************************************************************************************************
*  Execution       :   1. default node         cmd> node 6company.js 
* 
*  Purpose         : To 
* 
*  @description    
* 
*  @file           : 6company.js
*  @overview       : To 
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.2.1
*  @since          : 11-09-2018
*
*****************************************************************************************************************/
var fs = require('fs');
var prompt = require('prompt-sync')();
var utility = require('/home/administrator/js/Datastructures/utility/utility.js');
const util=require('util');

//let data = fs.readFileSync('/home/administrator/js/oops/utility/commercial.json');
var k,i,y;
var list=new  utility();
class StockAccount {
    constructor(stockname, numberofshare, shareprice) {/**creating an object for stockname,numberofshare & shareprice */
        this.stockname = stockname;
        this.numberofshare = numberofshare;
        this.shareprice = shareprice;
    }
    //to buy shares
    buy() {     /**add shares of stock to account */
        var stock = prompt('enter number of stocks: ');
        for (var i = 1; i <= stock; i++) {
            var name = prompt('enter the name: ');
            var number = prompt('enter the number of share: ');
            var price = prompt('enter the price: ');
            var object={
                name:name,
                number:number,
                price:price

            }
            var z=util.inspect(object);
            list.add(z);
             list.printList();
        }
     }
    //logic for selling
    sell() 
    {    /**subtract shares of stock from account */
         i = prompt('which index u want to sell ? : ');
        
         list.removeFrom(i);
        //console.log(k);
        list.printList();
     }
    }
var obj = new StockAccount();
while (1) {
    console.log('1.Buy the  Stocks');
    console.log('2.Sell the Stocks');/**print all the choices to user */
    console.log('3.Exit ');
    var choice = prompt('choose an option to perform desired operation :');
    switch (choice) {/**switch case implementation to perform the required operation */
        case '1': obj.buy();
            break;
        case '2': obj.sell();
            break;

        case '3': process.exit();
            break;
        }
}





