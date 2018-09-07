var utility = require('/home/administrator/js/Datastructures/utility/utility.js');
fs = require('fs');
var data = fs.readFileSync('/home/administrator/js/Datastructures/main/file2.txt', 'utf8');
console.log(data);
data = data.toString().split(' ');
data.sort(function (a, b) {
    return a - b;
});



var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function orderedList() {

    //read.question('Enter the element to search: ', function (element) {

        var list = new utility();
        for (var i = 0; i < (data.length); i++)//adding data to list
        {
            list.add(data[i]);
        }
        console.log(" Ascending order representation of the given list is : ")
        list.printList();
        read.question('Enter a number  to search: ', function (element) {
        if (list.indexOf(element) == -1)
         {
            list.insertAt(element, data.length);
            var l1=[];
            l1 = list.printList1();
           // console.log(l1);
             l2=list.sort(l1);          
           console.log(l2);

        }
        else 
        {
            list.removeElement(element);
            list.printList();

       }

        //list.printList();
           /** var l1=[];
             l1=list.printList1();
            console.log(l1);
            l1 = l1.toString().split(' ' );

            l1.sort(function (a, b) {
                return a - b;
            });
            console.log(l1);*/


        read.close();
    });
}
orderedList();




















