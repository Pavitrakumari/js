/****************************************************************************************************************************
*  Execution       :   1. default node         cmd> node inventory.js 
* 
*  Purpose         : To distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players using 2-D array
* 
*  @description    
* 
*  @file           : inventory.js
*  @overview       : To distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players using 2-D array
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.2.1
*  @since          : 11-09-2018
*
******************************************************************************************************************************************/

var fs=require('fs');
let rawdata = fs.readFileSync('/home/administrator/js/oops/utility/inventory.json');
let data=JSON.parse(rawdata);/** parsing the data which is in the JSON file */
//console.log(data);
var rice=data.rice;/**assining the rice which is in data to rice variable */
var pulses = data.pulses;/**assining the pulses which is in data to pulses  variable */
var wheat = data.wheat;/**assining the wheat which is in data to wheat variable */
console.log("--------------------------------------RICE--------------------------------------------------------");
console.log();
for(var key in rice)/** it iterates for all the elements in the rice */
{
    console.log(rice[key]);/**printing all the rice elements */
    console.log();
    console.log("The price for "+rice[key].name+" is : "+rice[key].weight*rice[key].price);/**printing the individual price */
    console.log();
}
console.log();
console.log("--------------------------------------PULSES----------------------------------------------------");
console.log();
for (var key in pulses)/** it iterates for all the elements in the pulses */
{
    console.log(pulses[key]);/**printing all the pulse elements */
    console.log();
    console.log("The price for "+pulses[key].name+" is : "+pulses[key].weight * pulses[key].price);
    console.log();/**printing the individual price  */
}
console.log();
console.log("-------------------------------------WHEAT-----------------------------------------------------");
console.log();
for (var key in wheat) /** it iterates for all the elements in the wheat */
{
    console.log(wheat[key]);/**printing all the wheat elements */
    console.log();
    console.log("The price for "+wheat[key].name+" is : "+wheat[key].weight * wheat[key].price);
    console.log();/**printing the individual price  */
}
console.log("{RICE : "+(parseInt(rice[0].weight)*parseInt(rice[0].price))+(parseInt(rice[1].weight)*parseInt(rice[1].price))+(parseInt(rice[2].weight)*parseInt(rice[2].price)));
console.log("      {PULSES : "+(pulses[0].weight*pulses[0].price)+(pulses[1].weight*pulses[1].price)+(pulses[2].weight*pulses[2].price));
console.log("                {WHEAT : "+(wheat[0].weight*wheat[0].price)+(wheat[1].weight*wheat[1].price)+(wheat[2].weight*wheat[2].price)+" }  }  } ");