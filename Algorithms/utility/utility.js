const _ = require('lodash');
var prompt = require('prompt-sync')();
module.exports = {





    /************PROGRAM TO CHECK WHETHER 2 STRINGS ARE ANAGRAM OR NOT ******************************8*/
    anagram: function (s1,s2)
     {
         var y=s1.split("").sort();      //split():to split string into substrings
        var z = s2.split("").sort();      
                                      /**sort():
                                      * Description : The sort() method sorts the items of an array.
                                     By default, the sort() method sorts the values as strings in alphabetical and ascending order.*/
         if(y.length==z.length)
         {
            for(var i=0;i<y.length;i++)    
            {
                                      //if the length of the given 2 input strings are equal,then only the given strings can be anagrams
                    if(y[i]===z[i])      //check all the characters of the string are same or not.
                    {
                        console.log(s1+" and "+s2+" are anagrams !");
                        break;
                    }
                    else
                    {
                        console.log("The given 2 strings are not anagrams");
                    }
                    break;
            }
         }
        else                     //if the length of the given 2 input strings are not equal,then it cannot be a anagram
            console.log("The given 2 strings are not anagrams......");
    },










/*****************PROGRAM TO FIND ALL THE PRIME NUMBERS UPTO A GIVEN RANGE******************************** */
 prime:function(range)
    {
       
       var  arr=[];
        var i,j,k;
        for(i=2;i<=range;i++)     //starts the for loop from i=2 to the given range
        {
            k=0;
            for(j=2;j<i;j++)      //starts the iteration between i & j
            {
                if(i%j==0)        
                {
                    k=1;
                    break;
                }
            }
            if(k==0)
           {
            
               console.log(i);    //prints the prime numbers in an arary
           }
        }
    },
    










    /*********************FIND PRIMES THAT ARE ANAGRAM & PALINDROMES**************************************/
    palindrome_anagram1:function(range)
    {
          var arr=[];
          var count=0;
        for(var i=0;i<=range;i++)
        {
            var flag=false;
            for(var j=2;j<=i/2;j++)    //*  This gives all the prime numbers between the given range
                                        
            {
                if(i%j===0)
                {
                    flag=true;
                }
            }
            if(flag===false)
            {
                arr.push(i);
            }    
        } 
        var arr1=[];
        console.log("THe anagrams are : ");
        for(var i=0;i<=arr.length-1;i++)
        {
            for(var j=i+1;j<=arr.length;j++)    //compares anagrams within all the primes using 2 for loops
            {
                var s1=''+parseInt(arr[i]);    
                                               /**parseInt(): 
                                                * Description:
                                             * The parseInt() function parses a string and returns an integer. */
                var s2=''+parseInt(arr[j]);
                if((((s1.split('')).sort()).join())===(((s2.split('')).sort()).join()))  //compares the 2 strings by sorting & spliting
                {
                    console.log(s1+" and "+s2+" are anagrams ");
                    arr1.push(parseInt(s1));
                }
            }
        }
        console.log(" THe  palindrome are : ");
        for(var i=0;i<arr1.length;i++)
        {
            var sum=0,r;
            var temp=arr1[i];
            var s=arr1[i];
            while(arr1[i]>0)
            {
                r=arr1[i]%10;
                //sum=(sum*10)+r;
                arr1[i]=parseInt(arr1[i]/10);
                sum = (sum * 10) + r;
            }
            if(temp===sum)
            {
                console.log(s+" is palindrome ");
            }
        }         
    },









    /*************SEARCH & SORTED LIST ELAPSED TIME PERFORMANCE IN DESCENDING ORDER***************** */
    getTime:function()
    {
        var date = new Date();           
        return date.getTime();
                             /**Date():The Date object is used to work with dates and times.
                                Date objects are created with new Date().*/

                             /**getTime():The getTime() method returns the number of milliseconds between 
                              * midnight of January 1, 1970 and the specified date. */
    },
    getElapsedTime:function(start,stop)
    {
        return elapsed=stop-start;
    },





    //*************BINARY SEARCH FOR INTEGERS******************************************* */
    bisearchnum:function(size)
    {
        console.log( );
        console.log();
        console.log();
        console.log();

        console.log(".........BINARY SEARCH FOR INTEGERS...........")
        var arr=new Array(size);
         var a=0;       
        for (i = 0; i < size; i++)
        {
            arr[i] = parseInt(prompt("enter integer numbers into the array : ")); 
        }
        arr.sort(function(a,b) { return a-b; } );
        console.log(arr);
        var f=0,l=size-1;
        var sea=prompt("enter the element you want to search : ");
         
        while(f<=l)
        {
                 var m=Math.floor((f+l)/2);     //f-first
                 if(sea==arr[m])                 //l=last
                 {
                      var a=1;
                       break;
                 }
                 else
                 {
                
                    if(sea>arr[m])    //if search element is greater than mid, then it searches the right-half of array
                    {
                        f=m+1;
                    }
                    else
                    {
                        l=m-1;        //if search element is less than mid,then it searches the left-half of the array
                    }
                }
        }
        if(a==1)
        {
                console.log("element found at index : "+m);

        }
        else
        {
                console.log("element not found..........");
        }
         
    },




    /***************************BINARY SEARCH FOR STRINGS******************************************** */
    bisearchstring:function(size)
    {
        console.log();
        console.log();
        console.log();
        console.log();

        console.log(".........BINARY SEARCH FOR STRINGS............");
        var arr = new Array(size);
        for (var i = 0; i < size; i++)
        {
            arr[i] = prompt("enter strings into the array : ");
        }
        var a = /[a-zA-Z]/g;
        var b = /[0-9]/g;
        var c = /[!@#$%^&*()<>+-/"'?]/g;
        var count = 0;
        for (var i = 0; i < arr.length; i++)
         {
            if (arr[i].search(b) == -1 && arr[i].search(c) == -1) //This is used to check whether the given inputs are strings or not
            {
                count++;
            }
        }
        if (count == arr.length) //if count is equal to array length,then only it performs the search operation
        {
            arr.sort();
            console.log(arr);
            var sea=prompt("enter the string you want to search  : ");
            var m=arr.indexOf(sea);
            if (m > -1) {
                console.log("Yes...The string  is present in the index : " + m);
            }
            else {
                 console.log("Nooo......The string is not found in the given input");
           }   
        }
        else                  //if count is not equal to array length, then it  doesnot consider the given input as string 
           console.log("plzz enter only strings.....");

    },





    /*******************INSERTION SORT FOR INTEGERS*************************************** */
    insertionum:function(size)
    {
        console.log();
        console.log();            //to print empty lines
        console.log();
        console.log();

        console.log(".........INSERTION SORT FOR INTEGERS...........")

        var arr = new Array(size);
         for (i = 0; i < size; i++) 
         {
               arr[i] = parseInt(prompt("enter integer numbers in the array : "));
         }
            var n=arr.length;
            for(var i=1;i<n;i++)
            {
                var key=arr[i];
                var j=i-1;
                while (j > -1 && arr[j] > key)      /**Insertion sort is a simple sorting algorithm 
                                                that builds the final sorted array one item at a time*/
               
                {
                     arr[j+1]=arr[j];
                     j--;
                }
                arr[j+1]=key;
            }
            console.log(arr);
       // }
        //else console.log("plzz enter only numbers...");

    },









    /********************INSERTION SORT METHOD FOR STRINGS************************************** */
    insertionstring: function (size) {
        console.log();
        console.log();
        console.log();
        console.log();

        console.log(".........INSERTION SORT FOR STRINGS...........")

        var arr = new Array(size);
        for (i = 0; i < size; i++) {
            arr[i] = prompt("Enter string into the array : ");
        }
        var a = /[a-zA-Z]/g;
        var b = /[0-9]/g;
        var c = /[!@#$%^&*()<>+-/"'?]/g;
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].search(b) == -1 && arr[i].search(c) == -1) {
                count++;
            }
        }
        if (count == arr.length) {
            arr.sort(function (a, b) { return a - b; });
            //console.log(arr);
            var n = arr.length;
            for (var i = 1; i < n; i++) 
            {
                var key = arr[i];
                var j = i - 1;
                while (j > -1 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
            console.log(arr);
        }
        else console.log("plzz enter only strings...");

    },








    /***************BUBBLE SORT METHOD FOR INTEGERS*********************************************** */
    bubblenum: function (size) {

        console.log();
        console.log();
        console.log();
        console.log();

        console.log(".........BUBBLE SORT FOR INTEGERS...........")
  
        var arr = new Array(size);
        for (i = 0; i < size; i++) {
            arr[i] = parseInt(prompt("enter integer numbers in the array : "));
        }
        var n = arr.length - 1;
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log(arr);
    },







    /***********************BUBBLE SORT METHOD FOR STRINGS***************************************** */
     bubblestring:function(size)
    {
         console.log();
         console.log();
         console.log();
         console.log();

        console.log(".........BUBBLE SORT FOR STRINGS...........");
//console.log();                                                                                                     );
        var arr = new Array(size);
        for (i = 0; i < size; i++)
         {
            arr[i] = prompt("Enter string into the array : ");
        } 
        var a = /[a-zA-Z]/g;
        var b = /[0-9]/g;
        var c = /[!@#$%^&*()<>+-/"'?]/g;
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].search(b) == -1 && arr[i].search(c) == -1) {
                count++;
            }
        }
        if (count == arr.length) {
            arr.sort(function (a, b) { return a - b; });
            var n=arr.length-1;
            for(var i=0;i<n;i++)
            {
                for(var j=0;j<n-i;j++)
                {
                  if(arr[j]>arr[j+1])
                  {
                    var temp=arr[j];    /**Bubble sort compares each element with its corresponding number 
                                           and swaps the 2 numbers to produce a sorted list*/
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                  }
                }
            }
            console.log(arr);

        }
        else console.log("plzz enter only strings.....")
    },
        















    /**********************************MERGE SORT METHOD FOR STRINGS ************************** */
    merge:function(size)
    {
        console.log();
        console.log();
        console.log();
        console.log();

        console.log(".........MERGE SORT FOR STRINGS...........")
        console.log();
        var arr = new Array(size);
        for (i = 0; i < size; i++) {
            arr[i] = prompt("Enter string into the array : ");
        }
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
            //arr.sort(function (a, b) { return a - b; });
            this.sort(arr);
            console.log(arr);
         }
         else console.log("plzz enter only strings....");
    },
    sort:function(arr)
    {
        if(arr.length==1) return;
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
        for(var i=0;i<a1.length;i++) a1[i]=arr[i];          /**splits the given array into 2 sub-arrays */
        for(var j=0;j<a2.length;j++,i++) a2[j]=arr[i];
        this.sort(a1);                                     /**splits the sub-array into sub sub-array until each element becomes into a seperate array */
        this.sort(a2);
        this.merge1(a1,a2,arr);                        /**calls the merge function to merge all the sub-arrays */

    },
    merge1:function(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])                 /**compares the 2 sub-arrays & sort them using a third array */
            {
                c[k]=a[i];
                k++;i++;

            }
            else{
                c[k]=b[j];
                k++;j++;
            }
        }
        while(i<a.length)
        {
            c[k]=a[i];
            k++;i++;

        
        }
        while(j<b.length)
        {
            c[k]=b[j];
            k++;j++;

        }

    },









    /************************INSERTION SORT METHOD FOR STRINGS********************************** */
    insertion: function (size) {
        console.log();
        console.log();
        console.log();
        console.log();

        console.log(".........INSERTION SORT FOR STRINGS...........")

        var arr = new Array(size);
        for (i = 0; i < size; i++) {
            arr[i] = prompt("Enter string into the array : ");
        }
        var a = /[a-zA-Z]/g;
        var b = /[0-9]/g;
        var c = /[!@#$%^&*()<>+-/"'?]/g;
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].search(b) == -1 && arr[i].search(c) == -1) {
                count++;
            }
        }
        if (count == arr.length) {
            arr.sort(function (a, b) { return a - b; });
            //console.log(arr);
            var n = arr.length;
            for (var i = 1; i < n; i++) {
                var key = arr[i];
                var j = i - 1;
                while (j > -1 && arr[j] > key) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = key;
            }
            console.log(arr);
        }
        else console.log("plzz enter only strings...");

    },






    



/*********************BUBBLE SORT METHOD FOR INTEGERS********************************************* */
    bubble: function (size) {

        console.log();
        console.log();
        console.log();
        console.log();

        console.log(".........BUBBLE SORT FOR INTEGERS...........")

        var arr = new Array(size);
        for (i = 0; i < size; i++) {
            arr[i] = parseInt(prompt("Enter integer elements  in the array : "));
        }
        
            var n = arr.length - 1;
            for (var i = 0; i < n; i++) {
                for (var j = 0; j < n - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            console.log(arr);
        
    },












    /*******************************DAY OF WEEK USING GREGORIAN CALENDER************************************ */
    dayofweek: function (day, month, year) {

        aa = (Math.floor((14 - month) / 12));
        aa = parseInt(aa);
        // console.log(aa)
        yy = year - aa;
        // console.log(yy)
        mm = ((month + (12 * aa)) - 2);
        mm = parseInt(mm);
        // console.log(mm)
        dayofweek = ((day + yy + Math.floor(yy / 4) - Math.floor(yy / 100)     /**This is the formula for 
                                                                            calculating day of week*/
        + Math.floor(yy / 400) + Math.floor((31 * mm) / 12)) % 7);
        // console.log(dayOfweek)
        dayofweek = parseInt(dayofweek);
        switch (parseInt(month)) {
            case 1:
                console.log("January\n");
                break;
            case 2:
                console.log("February\n");
                break;
            case 3:
                console.log("March\n");
                break;
            case 4:
                console.log("April\n");
                break;
            case 5:
                console.log("May\n");
                break;
            case 6:
                console.log("June\n");
                break;
            case 7:
                console.log("July\n");
                break;
            case 8:
                console.log("August\n");
                break;
            case 9:
                console.log("September\n");
                break;
            case 10:
                console.log("October\n");
                break;
            case 11:
                console.log("November\n");
                break;
            case 12:
                console.log("December\n");
                break;
            default:
                console.log("invalid Month number\nPlease try again ....\n");
                break;
        }

        //   var x= ((dayofweek + 6) % 7) + 1;

        switch ((dayofweek)) {
            case 0:
                console.log("Sunday");
                break;
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
        }

    },
















    /******** PROGRAM FOR  TEMPERATURE CONVERSION FROM FAHRENHEIT TO CELSIUS & VICEVERSA ******************/
    tempcon:function(c)
    {  var cel_to_fah=(c*(9/5)+32);
       
        console.log(" The celsius to fahreinheit conversion is : " + cel_to_fah +" (°C)");
    },
    tempcon1:function(f)
    {  
        
       var fah_to_cel=(f-32)*(5/9);
        console.log(" The fahrenheit to celsius conversion is : " + fah_to_cel +" (°F)");
    },
    
       










    /*************PROGRAM FOR  MONTHLY PAYMENT************************************************************** */
    monthlypayment:function(p,y,r)
    {
        var n=12*y;
        var r=(r/(12*100));
    
            var payment = (p * r) / (1 - Math.pow((1 + r), (-n)));

            console.log(payment);
        

    },












    /**************PROGRAM FOR BINARY SEARCH THE WORD FROM WORD LIST*****************************/
    binarywordlist:function(arr,sea)
    {
    
       var flag;
        arr= arr.sort(function (a, b) { return a-b; });
        console.log(arr);
        var f = 0 ;
        var l = arr.length - 1;
        while (f <= l) {
            var m = Math.floor((f + l) / 2);
            if (sea == arr[m]) {
             flag= 1;
                break;
            }
            else
                if (sea > arr[m]) {
                        f =m + 1;
                }
                    else
                     {
                        l = m - 1;
                    }
                
        }
        if (flag== 1) {
            console.log("element found at index : " + m);

        }
        else {
            console.log("element not found ");
        }


    },















    /**************PROGRAM TO FIND SQUARE OF A NON-NEGATIVE NUMBER USING NEWTON'S METHOD*******************/
    sqrt:function(c)
    {
        var t=c;
        var episilon=0.001;//1e-115;
         while (Math.abs((t - (c / t)) > episilon * t)) 
         {
               t = (((c / t) + t) / 2);
        }
         console.log("square root of "+c+" is : "+t);
    },
















    /*************PROGRAM TO COMPUTE BINARY REPRESENTATION OF GIVEN DECIMAL NUMBER************************ */
    tobinary:function(d)
    {
        //var a;
        var count=0;
        var x='';
        while(d>0)
        {
            
        
                var a=d%2;
            x=a+x;
            d=Math.floor(d/2);
    
        }
        console.log("The binary representation of given number is : "+x);
           
        
    },












    /**********************SWAP TWO NIBBLES & FIND NUMBER IS A POWER OF 2******************* */
    binary:function(n)
    {
        //try{

          //  console.log(v);
        //}catch(err){
          //  console.log(err.message);
        //}finally{

        this.tobinary(n);
        var v=((n & 0x0F) <<4 | (n & 0xF0)>>4);
        console.log("The new number obtained after swapping is : "+v);
        var temp=v;
        var x=this.power(v);
        if(x==true)
        {
            console.log("The resultant number "+temp+" is power of '2' ");

        }
        else 
        {
            console.log("The resultant  number " + temp+ " is not power of '2' ");

        }
    },
    power:function(v)        //POWER() function to calculate whether the resultant number is a power of 2 
    {
        if(v==0)
        {
            return false;
        }
        while(v!=1)
        {
            if(v%2!=0)
            return false;
            v=v/2;

        } return true;
    },










    /*****************VENDING MACHINE PROGRAM **************************************************** */
    vending:function(money,notes,index){
              var total=0;
              if(money==0)
              {
                  return false;
              }
              else{
                  if(money>=notes[index])
                  {
                      var calculate=Math.floor(money/notes[index]);     //takes the quotient when divided by money &
                      money=money%notes[index];                        //updates the money remained to be calculated
                      total=total+calculate;
                      console.log("The number of "+notes[index]+"/- notes are  : "+total);
                  }
                  index++;
                  return this.vending(money,notes,index)     /**Recursively calls the vending function to calculate the notes for remaining money */
              }
    },








    /**********************BINARY SEARCH TO FIND YOUR NUMBER************************** */
    findyournumber:function(i,r)
    {
        var first=parseInt(i);
        var last=parseInt(r);
        if(first==last)                    /**if starting range & ending range is same,then the number to
                                            be found is the same number itself*/ 
        {
            console.log("Your number is : "+first);
            console.log("Intermediate numbers : "+(first-1)+" and "+(first+1));
            return;
        }
        var mid=parseInt(Math.floor((first+last)/2));  //we need to calculate mid value to find the number
        var choice=prompt(" 1)    is it between : "+first+" - "+mid+"          or          2)    is it between  : "+(mid+1)+"  -  "+last+"       ");
        if(choice==1)
        {
            this.findyournumber(first,mid);      /**Recursively calls the method & takes user's choice again & again
                                                  if choice=1,then it checks within the first half of the given range*/ 
        }
        else if(choice==2)                       /**if choice=2,then it checks within the second half of the given range */
        {
            this.findyournumber(mid+1,last);    
        }
        
    
    }

    }




