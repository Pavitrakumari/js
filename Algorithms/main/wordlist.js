var fs=require('fs');
var readline=require('readline');
var utility = require('/home/administrator/js/Algorithms/utility/utility.js');
var read=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var data=fs.readFileSync('file.txt');
data=data.toString().split(',');
function binarywordlist()
{
    read.question("enter the element to search : ",function(sea){
 
                 utility.binarywordlist(data,sea);
                 read.close();
 });

}
binarywordlist();