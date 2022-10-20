//arrowFunctions
//1.Printing Hello world
add = () =>
{
    console.log("Hello world");
}
add()
//2. printing 1 to 100 using for loop
hi = () =>
{

    for(i =0;i<=100;i++)
    {
        console.log(i);
    }
}
hi()

//3.Increasing array value with 2
array = () =>
{
    
    arr =[1,2,3,4,5];
    for(let i =0;i<arr.length;i++)
    {
        arr[i] = arr[i]+2;
    
        
    }
    console.log(arr);
}
array()

//4. Reversing string using inbuilt functions and check paalindrome
car = (str) =>
{

    {
        console.log(str);
        j = str.split('');
        console.log("The splitted string is "+ ""+ j);
        k =j.reverse();
        console.log("The Reversed string is "+ ""+ k);
        l =k.join("")
        console.log("The joined string is "+ ""+ l);
    }
if(str===l)
    {
        console.log("It is a palindrome");

    }
    else{
        console.log("it is not a palindrome");
    }

}
car("mom")

//5.using if 
const a = 10;
const b = 20;
if(a<b)
{
    console.log("a is less than b");
}
else{
    console.log("a is big than b");
}