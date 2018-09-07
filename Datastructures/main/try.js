var utility = require('/home/administrator/js/Datastructures/utility/utility.js');
fs = require('fs');
var data = fs.readFileSync('/home/administrator/js/Datastructures/main/file1.txt', 'utf8');
console.log(data);
data = data.toString().split(' ');



var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function unOrderedList() {

    read.question('Enter the element to search: ', function (element) {

        var list = new utility();
      //  list.add(data);
      //  list.printList();
        for (var i = 0; i < (data.length); i++)//adding data to list
       {
            list.add(data[i]);
       }

        //list.printList();

        if (list.indexOf(element) == -1) 
        {
           list.insertAt(element,data.length);
           
        }
         else
         {
            list.removeElement(element);
           
        }
        
        list.printList();
        //var l1=[];
        var l1=list.printList1();
        fs.writeFileSync('/home/administrator/js/Datastructures/main/file1.txt', l1) ;
            


        read.close();
    });
}
unOrderedList();




















