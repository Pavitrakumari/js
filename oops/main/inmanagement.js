var fs = require('fs')
var prompt = require('prompt-sync')();


fs.readFile('/home/administrator/js/oops/utility/inmanagement.json', 'utf-8', function (err, data) {
    if (err) throw err

    var arrayOfObjects = JSON.parse(data);
    var size = prompt('Enter the number of stock you want ');
    for (var i = 0; i < size; i++) {

        var name1 = prompt('Enter the name of stock : ');
        var shares = prompt('Enter the shares : ');
        var price = prompt('Enter the price  : ');


        arrayOfObjects.stock.push({
            name: name1,
            share: shares,
            prices: price
        })

        console.log(arrayOfObjects);

        fs.writeFile('/home/administrator/js/oops/utility/inmanagement.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err) throw err
        })
    }
    console.log('Done!');
    var stock = arrayOfObjects.stock;



    for (var key in stock) {
        console.log(stock[key]);
        console.log("            ");
        console.log("The price of " + stock[key].name + " is $" +parseInt(stock[key].share) *parseInt(stock[key].price));
        console.log("            ");
        console.log("            ");
    }
   // var search = prompt('enter the stock name you wanted to search ');
    //if (search(stock[key].name == search)) {

//    }

   /** var choice = prompt('enter the choice 1 for adding data  or  2 for deleting data');
    if (choice == 1) {
        var name1 = prompt('Enter the name of stock ');
        var shares = prompt('Enter the shares ');
        var price1 = prompt('Enter the price  ');

        arrayOfObjects.stock.push({
            name: name1,
            share: shares,
            price: price1
        })

        console.log(arrayOfObjects);

        fs.writeFile('/home/bridgeit/Madhavi_p/nodeprograms/oops/utility/management.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err) {
            if (err) throw err
        })

    }
    elseif
    {



    }*/

})







