// Program on array filters
//filter() is used to
//1. Program to print even numbers from array using filter method
const arr1 = [1,2,3,4,5,6]
const output1 = arr1.filter((num,index,arr1) =>
{
    if(num%2==0)
    {
        return num;
    }
})
console.table(output1);

//2.Program to print Square of array numbers
const arr2 = [10,20,30,40,50]
const output2 = arr2.filter((num,index,arr2) =>
{
    for(let i=0;i<1;i++)
    {
     num = num*num;
      
    }
    console.log(num);
})
console.table(output2);

//3. 
const arr3 = [10,20,25,30,35,40,45]
const output3 = arr3.filter((num,index,arr3) =>
{
    if(num>=20)
    {
        console.log(num);
    }
})
console.log(output3);

//4. program to print odd numbers
const arr4 = [1,2,5,3,7,9,12,16]
const output4 = arr4.filter((num,index,arr)=>
{
    if(num%2!==0)
    {
       // console.log(num)
         return num;   
    }
})
console.table(output4);

//5.
const arr5 = [10,20,30]
const output5 = arr5.filter((num,index,arr)=>
{
    arr5[index] = arr5[index] +20;
    console.log(arr5[index]);
})
console.log(output5);