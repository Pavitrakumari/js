/********************************************************************************************************************
*  Execution       :   1. default node         cmd> node commercial.js 
* 
*  Purpose         : To 
* 
*  @description    
* 
*  @file           : commercial.js
*  @overview       : To 
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.2.1
*  @since          : 11-09-2018
*
*****************************************************************************************************************/

var fs = require('fs');
var prompt = require('prompt-sync')();

let data = fs.readFileSync('/home/administrator/js/oops/utility/commercial.json');
var arrayOfObjects = JSON.parse(data)

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
            arrayOfObjects.push({
                "name": name,
                "number_of_share": number,
                "price": price

            })

            console.log(arrayOfObjects);
            
        }


    }
    //logic for selling
    sell() {    /**subtract shares of stock from account */
        var i = prompt('which index u want to sell ? : ')
        delete arrayOfObjects[i];     /**deleting the element */
        console.log(arrayOfObjects);

    }
    //to save data to file
    save() {
/**save account to file */
        var res = JSON.stringify(arrayOfObjects)
        fs.writeFileSync('/home/administrator/js/oops/utility/commercial.json', res, 'utf-8')

    }
    //to display the data 
    printReport() {     /**print a detailed report of stock & values */
        var sum = 0;
        console.log(arrayOfObjects.length);
        for (var i = 0; i < arrayOfObjects.length; i++) {
            //console.log(i);
            var num = parseInt(arrayOfObjects[i].number_of_share * arrayOfObjects[i].price);
            console.log("the total price of each stock is: " + num);
            sum = parseInt(sum + num);
        }
        console.log("the total price of stock is: " + sum);
    }
}

var obj = new StockAccount();
while (1) {
    console.log('1.Buy the  Stocks');
    console.log('2.Sell the Stocks');/**print all the choices to user */
    console.log('3.Print the Stock Report');
    console.log('4.save the file');
    console.log('5.Exit');
    var choice = prompt('choose an option to perform desired operation :');
    switch (choice) {/**switch case implementation to perform the required operation */
        case '1': obj.buy()
            break;
        case '2': obj.sell()

            function filterByID(item) {

                console.log(item.name);

                if (item.name !== undefined) {
                    return true;
                }
                count++;
                return false;
            }

            arrayOfObjects = arrayOfObjects.filter(filterByID);

            console.log('Filtered Array\n', arrayOfObjects);
            break;

        case '3': obj.printReport()
            break;
        case '4': obj.save();
            break;
        case '5': process.exit()

        default: console.log('No Such Option ')
            break;
    }
}






