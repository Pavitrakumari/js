/******************************************************************************
*  Execution       :   1. default node         cmd> node hash.js 
*        
*  Purpose         :  Hashing   Function   to   search   a   Number   i   n   a   slot .
* 
*  Description    
* 
*  @file           : hash.js
*  @overview       : Hashing   Function   to   search   a   Number   i   n   a   slot 
*  @module         : hash.js- This is optional if expeclictly its an npm or local package
*  @author         : Pavitrakumari <pavithra.korapati@gmail.com>
*  @version        : 4.0
*  @since          : 06-09-2018
*
******************************************************************************/

fs = require('fs');
let prompt = require('prompt-sync')();
var data1 = fs.readFileSync('/home/administrator/js/Datastructures/main/file4.txt', 'utf-8');
var utility = require('/home/administrator/js/Datastructures/utility/utility.js');

let dataWrite = ''/**A string to write the data */

function hashing() 
{

    data1 = data1.toString().split(' ');/**convert    the given data into to a string & split it */

    var data = [];/**initialix=ze an empty array */

    for (let i = 0; i < data1.length; i++) {
        if (data1[i] != '') /**if data is not empty then push it into the array */
        {

            data.push(data1[i]);

        }
    }

    data = data.sort();/**sort the data */

    console.log();

    console.log(data);/**print the data */

    console.log();

    var find = prompt('Eneter a Number to search :');/**taking user input to search a number */

    if (data.indexOf(find) == -1) {/**checks if the element is present in the data or not*/

        console.log('\nGiven element not found in the file ');/**elementis not present in the given data */

        data.push(find);/**push the search element into the data if it is not present */

    }

    else {

        console.log('\nGiven element found in the file at ' + (data.indexOf(find) + 1) + ' position');
        /**The splice() method adds/removes items to/from an array, and returns the removed item(s) */
        data.splice((data.indexOf(find)), 1);

        console.log('\nElement removed From the file ');

    }

    let result = [];

    console.log('\nTotal numbers present in the file are : ' + data.length);
    /**The map() method creates a new array with the results of calling a function for every array element. */
    const map1 = data.map(x => x % (data.length + 1));/**map returns the new array by dividing with the data length */

    //console.log(map1);

    for (let i = 0; i <= data.length; i++) {/**iterates for the length of the data */

        let str = '';
        var ll = new utility();/**create an object for the utility which is in linked list */
        str = str + 'remainder' + ' [ ' + i + ' ]';/**adds the element to the remainder index */
        for (let j = 0; j <= data.length; j++) {

            if (map1[j] == i) {

                str = str + ' -> ' + data[j];/**adds the data element to the string  */

            }

        }

        ll.add(str);/**adds the str to the list */

        result.push(ll.printList1());/**push the element into the result*/ 

    }

    console.log(result);/**print the result */


    for (let i = 0; i < data.length; i++) {

        dataWrite = dataWrite + ' ' + data[i];
    }
/**write the modified data into the text file AGAIN */
    fs.writeFileSync('/home/administrator/js/Datastructures/main/file4.txt', dataWrite, 'utf-8');

    console.log('\n Data added into destination file ');

}

hashing();

