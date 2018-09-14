/******************************************************************************
*  Execution       :   1. default node         cmd> node stock.js 
* 
*  Purpose         : To calculate the value of each stock & the values of all stocks
* 
*  @description    
* 
*  @file           : stock.js
*  @overview       : To calculate the value of each stock & the values of all stocks
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.2.1
*  @since          : 11-09-2018
*
******************************************************************************/


var fs = require('fs');
let rawdata = fs.readFileSync('/home/administrator/js/oops/utility/stock.json');
let data = JSON.parse(rawdata);/**to parse the data which is given in json file */
//console.log(data);
  var stock= data.stock;/**Assigning the data in  to stock*/
console.log("--------------------------------------stock--------------------------------------------------------");
console.log();
for (var key in stock) {/**iterate for all the elements in the stock */
    console.log(stock[key]);/**print each of the element in the stock */
    console.log();
    console.log("The price for " + stock[key].name + " is : " + stock[key].number * stock[key].price);
    console.log();
}
console.log("The total number of shares is "+(stock[0].number+stock[1].number+stock[2].number));/**total number of shares */
console.log("The total value of all stocks is : "+((stock[0].price*stock[0].number)+(stock[1].price*stock[1].number)+(stock[2].price*stock[2].number)));/**value of all the stocks */
