fs = require('fs');
var utility2 = require('/home/administrator/js/Datastructures/utility/utility2.js');
var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function stack() {

    read.question('Enter the expression : ', function (exp) {
        var front=0,back=0;
        var stack = new utility2();
        var len=exp.length;
        for(var i=0;i<len;i++)
        {
            var ch=exp.charAt(i);
            if(ch=='(')
            {
                    stack.push(ch);
                    front++;
            }
            else if((ch==')'))
            {
                try{
                    stack.pop();
                    back++;
                }
                catch(err){
                    console.log('unmatched');
                }
            }    
                
            
        }
    if ((stack.isEmpty()) && (front==back))
        {
                console.log("Balanced Parenthisis");
        }
        else
                console.log(" unBalanced");
        read.close();
    });
}
stack();




















