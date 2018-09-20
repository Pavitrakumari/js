var fs = require('fs');
var prompt = require('prompt-sync')();
fs.readFile('/home/administrator/js/oops/utility/addressbook.json','utf-8',function(err,data){
    if (err) throw err
    var info=JSON.parse(data);
    var choice=prompt("Enter your choice :     1)To create       2)To open         3) To Exit ");
    if(choice==1)
    {
        console.log("ADD YOUR DETAILS.......");
        var fname=prompt("Enter your first name : ");
        var lname=prompt("Enter your last name : ");
        //var address=prompt("Enter your address : ");
        var city=prompt("enter your city name : ");
        var state=prompt("Enter the name of your state");
        var zip=prompt("Enter your pin number : ");
        var number=prompt("Enter your mobile number ");
         
        info.address.push({
            nameA:fname,
            nameB:lname,
            number1:number,
            city1:city,
            state1:state,
            zip1:zip

        })
        console.log(info);
        fs.writeFileSync('/home/administrator/js/oops/utility/addressbook.json', JSON.stringify(info), 'utf-8', function (err,data) {
        if(err) throw err
        })
    }if(choice==2)
    console.log("You have opended the address book.........");
    var choice=prompt("Enter your choice :  1)UPDATE     2)SORT       3)SEARCH       4)SAVE         5)EXIT");
    if(choice==1)
    {
        var name3=prompt("Which user's address you want to update : ");
        for(var i=0;i<address.length;i++)
        {
            if(address[i].fname==name3)
            {
                console.log("Enter '1' to update phone number");
                console.log("Enter '2' to update city ");
                console.log("Enter '3' to update state ");
                console.log("Enter '4' to update zip ");
                console.log("Enter '5' to exit ");
                
                
                var option=prompt("Enter your option which you want to perform : ");
                switch(parseInt(option))
                {
                    case 1:var phonenumber1=prompt("Enter  ")
                }
            }
        }
    }


        
        





    }

})