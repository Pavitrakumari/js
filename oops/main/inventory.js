var fs=require('fs');
let rawdata = fs.readFileSync('/home/administrator/js/oops/utility/inventory.json');
let data=JSON.parse(rawdata);
//console.log(data);
var rice=data.rice;
var pulses=data.pulses;
var wheat=data.wheat;
console.log("--------------------------------------RICE--------------------------------------------------------");
console.log();
for(var key in rice)
{
    console.log(rice[key]);
    console.log();
    console.log("The price for "+rice[key].name+" is : "+rice[key].weight*rice[key].price);
    console.log();
}
console.log();
console.log("--------------------------------------PULSES----------------------------------------------------");
console.log();
for (var key in pulses)
{
    console.log(pulses[key]);
    console.log();
    console.log("The price for "+pulses[key].name+" is : "+pulses[key].weight * pulses[key].price);
    console.log();
}
console.log();
console.log("-------------------------------------WHEAT-----------------------------------------------------");
console.log();
for (var key in wheat) 
{
    console.log(wheat[key]);
    console.log();
    console.log("The price for "+wheat[key].name+" is : "+wheat[key].weight * wheat[key].price);
    console.log();
}