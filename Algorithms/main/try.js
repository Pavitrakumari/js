var a=1;
try {
    a=1/p;
    console.log("new value of 'a' is "+a);

} catch (error) {
    console.log(error.message);

    
}
finally
{
    console.log("final value of 'a' is "+a);
}
