/******************************************************************************
*  Execution       :   1. default node         cmd> node objdeck.js 
* 
*  Purpose         : To sort the deck of cards & maintain in queue using linked list
* 
*  @description    
* 
*  @file           : objdeck.js
*  @overview       : To sort the deck of cards & maintain in queue using linked list
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.2.1
*  @since          : 11-09-2018
*
******************************************************************************/

fs = require('fs');
var utility = require('/home/administrator/js/oops/utility/deck.js');
var utility1 = require('/home/administrator/js/Datastructures/utility/utility.js');
var utility2 = require('/home/administrator/js/Datastructures/utility/utility3.js');
var list = new utility1();
var queue = new utility2();

var suit = ["♣", "♦", "♥", "♠"];
//var  rank =["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var deck = new Array();

for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < rank.length; j++) {
        var temp = "";
        deck.push(temp + rank[j] + suit[i]);
    }
}
//console.log(deck);

/**
 * shuffling deck of cards
 */
for (var i = 0; i < deck.length; i++) {
    var index = parseInt(Math.random() * deck.length);
    var temp = deck[i];
    deck[i] = deck[index];
    deck[index] = temp;
}
// console.log("The shuffled deck of cards are :");
//console.log(deck);

var x = 0; var y = 9;
var array = [];

var array2 = [];

/**
 * distributing deck of cards to 4 players such that each receive 9 cards
 */
for (var i = 0; i < 4; i++) {
    var array = [];

    for (var j = x; j < y; j++) {
        array.push(deck[j]);
    }

    var sorter = utility.Mysort('A2345679891JKQ');
    array.sort(sorter);
    // console.log("the cards distributed to players are in manner ")
    console.log(array);
    array2.push(array);
    x = x + 9;
    y = y + 9;

}
console.log("  ");
for (var i = 0; i < array2.length; i++) {
    list.add("      player"+(i+1)+" :    "+array2[i]);
}
var k = list.printList1();
console.log("The cards distributed to players in list are  :   " + k);

for (var i = 0; i < array2.length; i++) {
    queue.enqueue("      player" + (i + 1) + "  :    " +array2[i]);
}
//queue.dequeue(array2[0]);

var res = queue.printQueue();
console.log("    ");
console.log("    ");

console.log("The cards distributed to players  in queue are  :    " + res);




