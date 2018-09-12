var fs = require('fs');
let rawdata = fs.readFileSync('/home/administrator/js/oops/utility/stock.json');
let data = JSON.parse(rawdata);
//console.log(data);
  var stock= data.stock;
console.log("--------------------------------------stock--------------------------------------------------------");
console.log();
for (var key in stock) {
    console.log(stock[key]);
    console.log();
    console.log("The price for " + stock[key].name + " is : " + stock[key].number * stock[key].price);
    console.log();
}
console.log("The total number of shares is "+(stock[0].number+stock[1].number+stock[2].number));
console.log("The total value of all stocks is : "+stock[0].price*stock[0].number+stock[1].price*stock[1].number+stock[2].price*stock[2].number);
