/********************************************************************************************************
*  Execution       :   1. default node         cmd> node regularexpression.js 
* 
*  Purpose         : To sort the deck of cards & maintain in queue using linked list
* 
*  @description    
* 
*  @file           : regularexpression.js
*  @overview       : To sort the deck of cards & maintain in queue using linked list
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.2.1
*  @since          : 11-09-2018
*
***********************************************************************************************************/

var prompt = require('prompt-sync')();

var fs = require('fs');
let rawdata = fs.readFileSync('/home/administrator/js/oops/main/filereg.txt','utf8');
//let data = JSON.parse(rawdata);
var name=prompt("Enter your first name : ");
//var fullname=prompt("Enter your full name : ");
var arr=[];
arr=name;
var a = /[a-zA-Z]/g;
var b = /[0-9]/g;
var c = /[!@#$%^&*()<>+-/"'?]/g;
var count = 0;
for (var i = 0; i < arr.length; i++)
{
    if (arr[i].search(b) == -1 && arr[i].search(c) == -1) 
    {
        count++;
    }
}
if (count == arr.length)
{
    rawdata = rawdata.replace("<<name>>",name);
}
else 
{
    console.log(" Plzz enter only strings to give your name.........");
    return;
}
var fullname=prompt("Enter your full name : ");
var arr2=[];
var arr2=fullname;
var count2=0;
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i].search(b) == -1 && arr2[i].search(c) == -1) {
        count2++;
    }
}
if (count2 == arr2.length) {
    rawdata = rawdata.replace("<<name>>", fullname);
}
else {
    console.log(" Plzz enter only strings to give your full name.........");
    return;
}


var num=prompt("Enter your 10-digit mobile number : ");
var arr1=num;
if(num.length==10)
{
var count1 = 0;
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i].search(a) == -1 && arr1[i].search(c) == -1) {
        count1++;
    }
}
if (count1 == arr1.length) {
    rawdata = rawdata.replace("xxxxxxxxxx", num);
    

    //console.log(rawdata);
}

}
else{
    console.log("PLEASE ENTER CORRECT MOBILE NUMBER............");
    return;
}
//console.log(rawdata);
var date=new Date();
var l=date.getDate();
var m=date.getMonth();
var n=date.getFullYear();
var k=(l+"/"+m+"/"+n);
rawdata = rawdata.replace("01/01/2016",k);
console.log(rawdata);
fs.writeFileSync('/home/administrator/js/oops/main/filereg.txt',rawdata); //rewrite the file with the modified list

