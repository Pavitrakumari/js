var fs = require('fs')
var prompt = require('prompt-sync')();

let data = fs.readFileSync('/home/admininistrator/workspace/OOPs/AddressBook.json');


var address = JSON.parse(data)

console.log(address.length);
//var person= prompt('enter number of persons: ');
var strvar fs = require('fs')
var prompt = require('prompt-sync')();

let data = fs.readFileSync('/home/admininistrator/workspace/OOPs/AddressBook.json');


var address = JSON.parse(data)

console.log(address.length);
//var person= prompt('enter number of persons: ');
var strings = /[a-zA-Z]/g;
var integers = /[0-9]/g
var specialchar = /[!@#$%^&*()+?><]/g;

class AddressBook {
    constructor(fname, lname, city, state, zip, phnno) {
        this.fname = fname;
        this.lname = lname;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phnno = phnno;

    }
    create() {

        // var person= prompt('enter number of persons: ');
        for (var i = 0; i < person; i++) {
            var Fname = prompt('enter the first name: ');
            if (Fname.search(integers) == -1 && Fname.search(specialchar) == -1) {
                var Lname = prompt('enter the last name: ');
                if (Lname.search(integers) == -1 && Lname.search(specialchar) == -1) {

                    var City = prompt('enter the city name: ');
                    var State = prompt('enter the state: ');
                    var zip = prompt('enter the zip number: ');
                    if (zip.search(strings) == -1 && zip.search(specialchar) == -1) {
                        var phnno = prompt('enter the phone number: ');
                        if (phnno.length == 10) {
                            if (phnno.search(strings) == -1 && phnno.search(specialchar) == -1) {

                                address.push({



                                    "fname": Fname,



                                    "lname": Lname,

                                    "Address":
                                    {
                                        "city": City,
                                        "state": State,
                                        "zip": zip,
                                        "phnno": phnno,


                                    }
                                })
                                // address[i]=obj1;
                                // })
                                // console.log(address.fname.fname);
                                //console.log(address.Lname.lname);
                                console.log(address);
                                console.log(address.length);
                            }
                            else {
                                console.log("please enter valid name");
                                process.exit();
                            }
                        }
                        else {
                            console.log("please enter valid phone number");
                            process.exit();
                        }
                    }
                    else {
                        console.log("please enter valid name");
                        process.exit();
                    }
                }
                else {
                    console.log("please enter valid name");
                    process.exit();
                }
            }
            else {
                console.log("please enter valid name");
                process.exit();
            }

        }

    }
    save() {


        var res = JSON.stringify(address)
        console.log(res);
        fs.writeFileSync('/home/admininistrator/workspace/OOPs/AddressBook.json', res, 'utf-8')

    }
    /*edit() {
        //var del=prompt("provide an index delete the array: ");
        //address.splice(del,1);

        var i = prompt('which index u want to update ? : ')
        var City1 = prompt('enter the city name: ');
        var State1 = prompt('enter the state: ');
        var zip1 = prompt('enter the zip number: ');
        var phnno1 = prompt('enter the phone number: ');


        //address.push({

        var obj1 = {

            "fname": address[i].fname,


            "lname": address[i].lname,

            "Address":
            {
                "city": City1,
                "state": State1,
                "zip": zip1,
                "phnno": phnno1,


            }
        }

        // })
        address[i] = obj1;

        // address.shift();

    }*/



    edit() {
        var name = prompt('Enter the user u want to Edit : ')

        for (var i = 0; i < address.length; i++) {
            if (address[i].fname == name) {
                console.log('Press 1 to edit your City : ')
                console.log('Press 2 to edit your pincode :')
                console.log("press 3 to edit your State: ")
                console.log("Press 4 to edit your Phonenumber :")
                console.log("Press 5 to exit ")


                var option = prompt('Enter the option you want to edit ')
                switch (parseInt(option)) {

                    case 1: var city1 = prompt('Enterr your new city : ')
                        var object1 = {
                            "fname": address[i].fname,
                            "lname": address[i].lname,
                            "Address": {
                                "city": city1,
                                "phnno": address[i]["Address"].phnno,
                                "zip": address[i]["Address"].zip,
                                "state": address[i]["Address"].state
                            }
                        }
                        address[i] = object1;
                        /*fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8', function (err) {
                            if (err) throw err
    
                        }
                        )*/
                        console.log(address)
                        break;

                    case 2: var pin2 = prompt('enter the new pincode : ')
                        if (pin2.search(strings) == -1 && pin2.search(specialchar) == -1) {
                            var object2 = {
                                "fname": address[i].fname,
                                "lname": address[i].lname,
                                "Address": {
                                    "city": address[i]["Address"].city,
                                    "phnno": address[i]["Address"].phnno,
                                    "zip": pin2,
                                    "state": address[i]["Address"].state
                                }
                            }
                            address[i] = object2
                            /*fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8', function (err) {
                                if (err) throw err
        
                            }
                            )*/
                            console.log(address);
                            break;
                        }
                        else {
                            console.log("please enter valid number");
                            process.exit();
                        }

                    case 3: var state1 = prompt('Enter your new state : ')
                        var object3 = {
                            "fname": address[i].fname,
                            "lname": address[i].lname,
                            "Address": {
                                "city": address[i]["Address"].city,
                                "phnno": address[i]["Address"].phnno,
                                "zip": address[i]["Address"].zip,
                                "state": state1
                            }
                        }
                        address[i] = object3;
                        /*fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8', function (err) {
                            if (err) throw err
        
                        }
                        )*/
                        console.log(address);
                        break;

                    case 4: var Phonenumber1 = prompt('Enter the new street name : ')
                        if (pin2.search(strings) == -1 && pin2.search(specialchar) == -1) {
                            var object4 = {
                                "fname": address[i].fname,
                                "lname": address[i].lname,
                                "Address": {
                                    "city": address[i]["Address"].city,
                                    "phnno": Phonenumber1,
                                    "zip": address[i]["Address"].zip,
                                    "state": address[i]["Address"].state
                                }
                            }
                            address[i] = object4;
                            /* fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8', function (err) {
                                 if (err) throw err
                             }
                             )*/
                            console.log(address);
                            break;
                        }
                        else {
                            console.log("please enter valid phone number");
                            process.exit();
                        }

                    case 5: process.exit()

                    default: console.log('Please enter the valid option ')
                }
            }
        }
    }






    delete() {
        var lastname = prompt('which name you want to delete ? : ')
        for (var i = 0; i < address.length; i++) {
            if (address[i].lname == lastname) {
                address.splice(i, 1);
            }
        }

    }
    compare(a, b) {
        if (a.lname < b.lname)
            return -1;
        if (a.lname > b.lname)
            return 1;
        return 0;
    }
    sort() {
        console.log(address.sort(this.compare));
    }
}
/*var ref=new AddressBook();
ref.create();
ref.edit();
ref.save();
ref.delete();
ref.sort();
ref.save();*/


var ref = new AddressBook();
while (1) {
    console.log('1.create')
    console.log('2.open')
    console.log('3.exit')
    var choice = prompt('What do u want to do ?')
    switch (choice) {
        case '1': var person = prompt('enter number of persons: ');
            ref.create();
            break;
        case '2':   //open1();
            var boolean = true;
            while (boolean) {
                console.log('1.edit')
                console.log('2.delete')
                console.log('3.sorting')
                console.log('4.save')
                console.log('5.quit')
                var choice1 = prompt('What do u want to do ?')
                switch (choice1) {
                    case '1': ref.edit();
                        break;
                    case '2': ref.delete();
                        break;
                    case '3': ref.sort();
                        break;
                    case '4': ref.save();
                        break;
                    case '5': boolean = false;
                }
            }
            break;

        case '3': process.exit();

    }
}




ings = /[a-zA-Z]/g;
var integers = /[0-9]/g
var specialchar = /[!@#$%^&*()+?><]/g;

class AddressBook {
    constructor(fname, lname, city, state, zip, phnno) {
        this.fname = fname;
        this.lname = lname;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phnno = phnno;

    }
    create() {

        // var person= prompt('enter number of persons: ');
        for (var i = 0; i < person; i++) {
            var Fname = prompt('enter the first name: ');
            if (Fname.search(integers) == -1 && Fname.search(specialchar) == -1) {
                var Lname = prompt('enter the last name: ');
                if (Lname.search(integers) == -1 && Lname.search(specialchar) == -1) {

                    var City = prompt('enter the city name: ');
                    var State = prompt('enter the state: ');
                    var zip = prompt('enter the zip number: ');
                    if (zip.search(strings) == -1 && zip.search(specialchar) == -1) {
                        var phnno = prompt('enter the phone number: ');
                        if (phnno.length == 10) {
                            if (phnno.search(strings) == -1 && phnno.search(specialchar) == -1) {

                                address.push({



                                    "fname": Fname,



                                    "lname": Lname,

                                    "Address":
                                    {
                                        "city": City,
                                        "state": State,
                                        "zip": zip,
                                        "phnno": phnno,


                                    }
                                })
                                // address[i]=obj1;
                                // })
                                // console.log(address.fname.fname);
                                //console.log(address.Lname.lname);
                                console.log(address);
                                console.log(address.length);
                            }
                            else {
                                console.log("please enter valid name");
                                process.exit();
                            }
                        }
                        else {
                            console.log("please enter valid phone number");
                            process.exit();
                        }
                    }
                    else {
                        console.log("please enter valid name");
                        process.exit();
                    }
                }
                else {
                    console.log("please enter valid name");
                    process.exit();
                }
            }
            else {
                console.log("please enter valid name");
                process.exit();
            }

        }

    }
    save() {


        var res = JSON.stringify(address)
        console.log(res);
        fs.writeFileSync('/home/admininistrator/workspace/OOPs/AddressBook.json', res, 'utf-8')

    }
    /*edit() {
        //var del=prompt("provide an index delete the array: ");
        //address.splice(del,1);

        var i = prompt('which index u want to update ? : ')
        var City1 = prompt('enter the city name: ');
        var State1 = prompt('enter the state: ');
        var zip1 = prompt('enter the zip number: ');
        var phnno1 = prompt('enter the phone number: ');


        //address.push({

        var obj1 = {

            "fname": address[i].fname,


            "lname": address[i].lname,

            "Address":
            {
                "city": City1,
                "state": State1,
                "zip": zip1,
                "phnno": phnno1,


            }
        }

        // })
        address[i] = obj1;

        // address.shift();

    }*/



    edit() {
        var name = prompt('Enter the user u want to Edit : ')

        for (var i = 0; i < address.length; i++) {
            if (address[i].fname == name) {
                console.log('Press 1 to edit your City : ')
                console.log('Press 2 to edit your pincode :')
                console.log("press 3 to edit your State: ")
                console.log("Press 4 to edit your Phonenumber :")
                console.log("Press 5 to exit ")


                var option = prompt('Enter the option you want to edit ')
                switch (parseInt(option)) {

                    case 1: var city1 = prompt('Enterr your new city : ')
                        var object1 = {
                            "fname": address[i].fname,
                            "lname": address[i].lname,
                            "Address": {
                                "city": city1,
                                "phnno": address[i]["Address"].phnno,
                                "zip": address[i]["Address"].zip,
                                "state": address[i]["Address"].state
                            }
                        }
                        address[i] = object1;
                        /*fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8', function (err) {
                            if (err) throw err
    
                        }
                        )*/
                        console.log(address)
                        break;

                    case 2: var pin2 = prompt('enter the new pincode : ')
                        if (pin2.search(strings) == -1 && pin2.search(specialchar) == -1) {
                            var object2 = {
                                "fname": address[i].fname,
                                "lname": address[i].lname,
                                "Address": {
                                    "city": address[i]["Address"].city,
                                    "phnno": address[i]["Address"].phnno,
                                    "zip": pin2,
                                    "state": address[i]["Address"].state
                                }
                            }
                            address[i] = object2
                            /*fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8', function (err) {
                                if (err) throw err
        
                            }
                            )*/
                            console.log(address);
                            break;
                        }
                        else {
                            console.log("please enter valid number");
                            process.exit();
                        }

                    case 3: var state1 = prompt('Enter your new state : ')
                        var object3 = {
                            "fname": address[i].fname,
                            "lname": address[i].lname,
                            "Address": {
                                "city": address[i]["Address"].city,
                                "phnno": address[i]["Address"].phnno,
                                "zip": address[i]["Address"].zip,
                                "state": state1
                            }
                        }
                        address[i] = object3;
                        /*fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8', function (err) {
                            if (err) throw err
        
                        }
                        )*/
                        console.log(address);
                        break;

                    case 4: var Phonenumber1 = prompt('Enter the new street name : ')
                        if (pin2.search(strings) == -1 && pin2.search(specialchar) == -1) {
                            var object4 = {
                                "fname": address[i].fname,
                                "lname": address[i].lname,
                                "Address": {
                                    "city": address[i]["Address"].city,
                                    "phnno": Phonenumber1,
                                    "zip": address[i]["Address"].zip,
                                    "state": address[i]["Address"].state
                                }
                            }
                            address[i] = object4;
                            /* fs.writeFileSync('./address.json', JSON.stringify(address_object), 'utf-8', function (err) {
                                 if (err) throw err
                             }
                             )*/
                            console.log(address);
                            break;
                        }
                        else {
                            console.log("please enter valid phone number");
                            process.exit();
                        }

                    case 5: process.exit()

                    default: console.log('Please enter the valid option ')
                }
            }
        }
    }






    delete() {
        var lastname = prompt('which name you want to delete ? : ')
        for (var i = 0; i < address.length; i++) {
            if (address[i].lname == lastname) {
                address.splice(i, 1);
            }
        }

    }
    compare(a, b) {
        if (a.lname < b.lname)
            return -1;
        if (a.lname > b.lname)
            return 1;
        return 0;
    }
    sort() {
        console.log(address.sort(this.compare));
    }
}
/*var ref=new AddressBook();
ref.create();
ref.edit();
ref.save();
ref.delete();
ref.sort();
ref.save();*/


var ref = new AddressBook();
while (1) {
    console.log('1.create')
    console.log('2.open')
    console.log('3.exit')
    var choice = prompt('What do u want to do ?')
    switch (choice) {
        case '1': var person = prompt('enter number of persons: ');
            ref.create();
            break;
        case '2':   //open1();
            var boolean = true;
            while (boolean) {
                console.log('1.edit')
                console.log('2.delete')
                console.log('3.sorting')
                console.log('4.save')
                console.log('5.quit')
                var choice1 = prompt('What do u want to do ?')
                switch (choice1) {
                    case '1': ref.edit();
                        break;
                    case '2': ref.delete();
                        break;
                    case '3': ref.sort();
                        break;
                    case '4': ref.save();
                        break;
                    case '5': boolean = false;
                }
            }
            break;

        case '3': process.exit();

    }
}




var fs = require('fs')
var prompt = require('prompt-sync')();

let data = fs.readFileSync('/home/admininistrator/workspace/OOPs/AddressBook.json');


var address = JSON.parse(data)

console.log(address.length);
//var person= prompt('enter number of persons: ');
var strings = /[a-zA-Z]/g;
var integers = /[0-9]/g
var specialchar = /[!@#$%^&*()+?><]/g;

class AddressBook {
    constructor(fname, lname, city, state, zip, phnno) {
        this.fname = fname;
        this.lname = lname;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phnno = phnno;

    }
    create() {

        // var person= prompt('enter number of persons: ');
        for (var i = 0; i < person; i++) {
            var Fname = prompt('enter the first name: ');
            if (Fname.search(integers) == -1 && Fname.search(specialchar) == -1) {
                var Lname = prompt('enter the last name: ');
                if (Lname.search(integers) == -1 && Lname.search(specialchar) == -1) {

                    var City = prompt('enter the city name: ');
                    var State = prompt('enter the state: ');
                    var zip = prompt('enter the zip number: ');
                    if (zip.search(strings) == -1 && zip.search(specialchar) == -1) {
                        
...

                        [Message clipped]  View entire message

                        Thanks a lot.
                        Got it, thanks!
                        What is this ?


