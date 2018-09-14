/********************************************************************************************************************
*  Execution       :   1. default node         cmd> node deck.js 
* 
*  Purpose         : To distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players using 2-D array
* 
*  @description    
* 
*  @file           : deck.js
*  @overview       : To distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players using 2-D array
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.2.1
*  @since          : 11-09-2018
*
*****************************************************************************************************************/

var fs = require('fs');
var deck = new Array();/**to declare an empty array */
var suit =[ "Spades", "Hearts", "Diamonds", "Clubs"];/**the elements in the deck */
var rank = [ "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];/**the elements in the deck */
for(var i=0;i<suit.length;i++)
{
    for(j=0;j<rank.length;j++)
    {
        var temp=" ";
        deck.push(temp+rank[j]+suit[i]);/**To concatenate the rank & suit elements */

    }
}
/**For loop & the temeperaray variable is used to shuffle the cards */
for (var i = 0; i < deck.length; i++) {
    var index = parseInt((Math.random() * deck.length));/**Math.random() is used to get the random elements */
    var temp = deck[i];
    deck[i] = deck[index];
    deck[index] = temp;
}
var x=0;var y=9;
var array=[];/**initializing the array */
var newArr = [];/**reinitializing the new array */
console.log("The cards received by the 4 players using 2-D array : ");
for(var i=0;i<4;i++)
{
    var array=[];/**Reinitializing the array to get a new 1-D array */
    for(var j=x;j<y;j++)
    {
        array.push(deck[j]);/**pushing the shuffled deck into the array  */
    }
    x=x+9;
    y=y+9;
    while (array.length) newArr.push(array.splice(0, 10));/**Always checking the array length pushing into the new array bcz the array is reinitialized always */
}
console.log(newArr);/**to print the newarray */