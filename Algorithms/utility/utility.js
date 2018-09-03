const _ = require('lodash');
var prompt = require('prompt-sync')();
module.exports = {
    anagram: function (s1,s2)
     {
         var y=s1.split("").sort();
        var z=s2.split("").sort();
        for(var i=0;i<y.length;i++)
            {
                if(y.length===z.length)
                {
                    if(y[i]===z[i])
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
        
        
    },
    prime:function(range)
    {
       
       var  arr=[];
        var i,j,k;
        for(i=2;i<=range;i++)
        {
            k=0;
            for(j=2;j<i;j++)
            {
                if(i%j==0)
                {
                k=1;
                break;
                }

            }
            if(k==0)
           {
            arr.push(arr[i])  ; 
            console.log(arr[i]);

           }
        }
    },
    
    palindrome_anagram1:function(range)
    {
          var arr=[];
          var count=0;
        for(var i=0;i<=1000;i++)
        {
            var flag=false;
            for(var j=2;j<=i/2;j++)
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
            for(var j=i+1;j<=arr.length;j++)
            {
                var s1=''+parseInt(arr[i]);
                var s2=''+parseInt(arr[j]);
                if((((s1.split('')).sort()).join())===(((s2.split('')).sort()).join()))
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

    bisearchnum:function(arr)
    {
       var sea=prompt("enter the search element");
        var f=0,a=0;
        var l=arr.length-1;
        arr.sort(function(a,b) { return a-b; } );
        console.log(arr);
        while(f<=l)
        {
            var m=Math.floor((f+l)/2);
            if(sea==arr[m])
            {
                var a=1;
                break;
            }
            else{
                
                    if(sea>arr[m])
                    {
                        f=m+1;
                    }
                    else
                    {
                        l=m-1;
                    }
                }
            }
            if(a==1)
            {
                console.log("element found at index : "+m);

            }
            else{
                console.log("element not found ");
            }
        
         
    },
    bisearchstring:function(arr)
    {
        var sea=prompt("enter the search element : ")
        var m=arr.indexOf(sea);
        if (m > -1) {
            console.log("the string  is present in the index : " + m);
        }
        else {
            console.log("the string is not found in the given input");
        }

    },
    insertionum:function(arr)
    {
        var n=arr.length;
        for(var i=1;i<n;i++)
        {
            var key=arr[i];
            var j=i-1;
            while(j>-1 && arr[j]>key)
            {
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=key;
        }
        console.log(arr);

    },
    bubblenum:function(arr)
    {
        var n=arr.length-1;
        for(var i=0;i<n;i++)
        {
            for(var j=0;j<n-i;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        console.log(arr);
    },
    merge:function(arr)
    {
        this.sort(arr);
        console.log(arr);
    },
    sort:function(arr)
    {
        if(arr.length==1) return;
        var m=Math.floor(arr.length/2);
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
        for(var i=0;i<a1.length;i++) a1[i]=arr[i];
        for(var j=0;j<a2.length;j++,i++) a2[j]=arr[i];
        this.sort(a1);
        this.sort(a2);
        this.merge1(a1,a2,arr);

    },
    merge1:function(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])
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
    dayofweek:function(m,d,y)
    {
        var y1=(y-Math.floor((14-m)/12));
        var x=(y1+Math.floor(y1/4)-Math.floor(y1/100)+Math.floor(y1/400));
        var m1=(m+12*(Math.floor(14-m)/12)-2);
        var d1=(Math.floor(d+x+(31*m1)/12)%7);
        switch(parseInt(d1))
        {
            case 0:console.log("sunday");
                        break;
            case 1:console.log("monday");
                     break;
            case 2:console.log("tuesday");
                     break;
            case 3:console.log("wednesday");
                      break;
            case 4:console.log("thursday");
                     break;
            case 5:console.log("friday");
                      break;
            case 6:console.log("saturday");
                      break;
            default:console.log("noo results found");                                       

        }

    },
 
      tempcon:function(c)
    {  var cel_to_fah=(c*(9/5)+32);
       // var fah_to_cel=(f-32)*(5/9);
        console.log(" The celsius to fahreinheit conversion is : "+cel_to_fah);
       // console.log(" The fahrenheit to celsius conversion is : "+fah_to_cel);
    },
    tempcon1:function(f)
    {  
        //var cel_to_fah=(c*(9/5)+32);
       var fah_to_cel=(f-32)*(5/9);
        //console.log(" The celsius to fahreinheit conversion is : "+cel_to_fah);
       console.log(" The fahrenheit to celsius conversion is : "+fah_to_cel);
    },
    
    
    monthlypayment:function(p,y,r)
    {
        var n=12*y;
        var r=(r/(12*100));
    
            var payment = (p * r) / (1 - Math.pow((1 + r), (-n)));

            console.log(payment);
        

    },
    binarywordlist:function(arr,sea)
    {
       // var sea = prompt("enter the search element");
       // var f = 0,;
        //var l = arr.length - 1;
       var flag;
        arr= arr.sort(function (a, b) { return a-b; });
        console.log(arr);
        var f = 0 ;
        var l = arr.length - 1;
       // console.log(arr);
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
    sqrt:function(c)
    {
        var t=c;
        var episilon=0.001;//1e-115;
//t=(((c/t)+t)/2);
         while (Math.abs((t - (c / t)) > episilon * t)) {
               t = (((c / t) + t) / 2);
               //console.log("square root of " + c + " is : " + t);

           }
       
        console.log("square root of "+c+" is : "+t);
    },
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
    power:function(v)
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
    vending:function(money,notes,index){
              var total=0;
              if(money==0)
              {
                  return false;
              }
              else{
                  if(money>=notes[index])
                  {
                      var calculate=Math.floor(money/notes[index]);
                      money=money%notes[index];
                      total=total+calculate;
                      console.log("The number of "+notes[index]+"/- notes are  : "+total);
                  }
                  index++;
                  return this.vending(money,notes,index)
              }
    },
    findyournumber:function(i,r)
    {
        var first=parseInt(i);
        var last=parseInt(r);
        if(first==last)
        {
            console.log("Your number is : "+first);
            console.log("Intermediate numbers : "+(first-1)+" and "+(first+1));
            return;
        }
        var mid=parseInt(Math.floor((first+last)/2));  
        var choice=prompt(" 1)    is it between : "+first+" - "+mid+"          or          2)    is it between  : "+(mid+1)+"  -  "+last);
        if(choice==1)
        {
            this.findyournumber(first,mid);
        }
        else if(choice==2) 
        {
            this.findyournumber(mid+1,last);
        }
        else 
        {
            console.log(' invalid ......')
        }
    
    }

    }




