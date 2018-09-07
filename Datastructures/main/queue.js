fs = require('fs');
var utility3 = require('/home/administrator/js/Datastructures/utility/utility3.js');
var readline = require('readline');
var read = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function queue() {

    read.question('Enter the expression : ', function (exp) {
        
        var queue = new utility3();
        console.log();
        
        console.log("------------Banking Cash Counter-----------");
        console.log("1.Deposit");
        console.log("2.Withdraw");
        console.log("3.Number of people in the Queue ");
        console.log("4.Exit");
        console.log();
        console.log("Enter your choice: ");
        var choice =prompt("Enter your choice"); 
        switch (choice) {
            case 1:
                var dep=prompt("Enter the amount you want to Deposit");
                queue.enqueue(dep);
                queue.printQueue();
                break;
            case 2:
                var wit=prompt("Enter the amount you want to Withdraw ");
                queue.dequeue();
                q.remove();
                System.out.println(" Your Available Balance is: ");
                q.display();
("------------Banking Cash Counter-----------");
        System.out.println("1.Deposit");
        System.out.println("2.Withdraw");
        System.out.println("3.Number of people in the Queue ");
        System.out.println("4.Exit");
        System.out.println();
        System.out.println("Enter your choice: ");
        int choice = u.inputInteger();
        switch (choice) {
            case 1:
                System.out.println("Enter the amount you want to Deposit");
                q.insert(u.inputInteger());
                q.display();
                break;
            case 2:
                System.out.println("Enter the amount you want to Withdraw ");
                u.inputInteger();
                q.remove();
                System.out.println(" Your Available Balance is: ");
                q.display();
