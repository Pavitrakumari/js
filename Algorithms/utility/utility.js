const _ = require('lodash');
var prompt = require('prompt-sync')();
module.exports = {
    anagram: function (s1,s2)
     {
         var b=0;
        if (s1.length!=s2.length) 
        {
            console.log("The given 2 strings are not anagram to each other...");
        }
        else 
        {
            for(var i=0;i<s1.length;i++)
            {
                var s=s1.charAt(i);
                for(var j=0;j<s2.length;j++)
                {
                    if(s==s2.charAt(j));
                    b++;

                }
                if(b==0)
                   break;
                
            }
            if(b==0)
            {
                console.log(" NO....given 2 strings are not anagrams ");
            }
            else{
                console.log("Yes....given 2 strings are anagrams ");
            }
        }
        
    },
    prime:function()
    {
        console.log("hii");
    }
}
