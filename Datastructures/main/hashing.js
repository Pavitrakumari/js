var prompt = require('prompt-sync')();
var utility = require('/home/administrator/js/Datastructures/utility/utility.js');
var fs = require('fs');

function hashFunc() {              /**creating arrays to store the result for each of the number  */
    var arr = new Array(10), arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [], arr9 = [], arr10 = [], arr11 = [];
    var list = new utility();      /**creating an object for linked list which is in utility to a reference variable 'list' */
    var data = fs.readFileSync('file4.txt');/**reading data from the file  */
    data = data.toString().split(" ");      /**converting the data into string & splitting */
    var arr = Array.from(data);/**The Array.from() method returns an Array object from any object with a length property or an iterable object. */
    arr.sort();                 /** It is used to sort the obtained array */
    console.log(arr);           /** To print the array */
    var val = prompt(" enter a element to search: ");/**Taking user input to search the element */
    for (var i = 0; i < data.length; i++) {   /**Adding data into the list */
        list.add(data[i]);
    }
    list.printList();                  /**print the list */
    var result = list.indexOf(val);/**If the search element is not found,then add the element into the list */
    if (result == -1) {
        console.log("Element not present!");
        list.add(val);
    }
    else {
        console.log("Element is present!!");
        list.removeElement(val);/** If the element is present,then remove the element from the list */
    }
    val = list.printList();
    for (var j = 0; j < data.length; j++) {
        var res = parseInt(data[j]) % parseInt(data.length);/**Dividing each of the data with the length of the data i.e.,'11' */
        switch (parseInt(res)) {/**Uisng switch case to the result obtained */
            case 0:
                arr1.push(data[j]);/**if the remainder is '0',then push that data element into the array */
                break;

            case 1:
                arr2.push(data[j]);/**if the remainder is '1',then push that data element into the array */
                break;

            case 2:
                arr3.push(data[j]);/**if the remainder is '2',then push that data element into the array */
                break;

            case 3:
                arr4.push(data[j]);/**if the remainder is '3',then push that data element into the array */
                break;

            case 4:
                arr5.push(data[j]);/**if the remainder is '4',then push that data element into the array */
                break;

            case 5:
                arr6.push(data[j]);/**if the remainder is '5',then push that data element into the array */
                break;

            case 6:
                arr7.push(data[j]);/**if the remainder is '6',then push that data element into the array */
                break;

            case 7:
                arr8.push(data[j]);/**if the remainder is '7',then push that data element into the array */
                break;

            case 8:
                arr9.push(data[j]);/**if the remainder is '8',then push that data element into the array */
                break;

            case 9:
                arr10.push(data[j]);/**if the remainder is '9',then push that data element into the array */
                break;

            case 10:
                arr11.push(data[j]);/**if the remainder is '10',then push that data element into the array */
                break;

        }
    }
    var array = [];
    array.push(arr1);
    array.push(arr2);
    array.push(arr3);
    array.push(arr4);
    array.push(arr5);
    array.push(arr6);
    array.push(arr7);
    array.push(arr8);
    array.push(arr9);
    array.push(arr10);
    array.push(arr11);

    for (var k = 0; k < array.length; k++) {
        console.log("a[" + k + "] => " + array[k].join('=>'));
    }
    fs.appendFileSync('/home/administrator/js/Datastructures/main/file4.txt', array.join('-->'), function () { console.log('completed') })
}
hashFunc();



