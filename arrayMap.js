//Programs on array using map function
// map(callback(currentvalue,index,arr)) method calls the specified function for every array element and returns the new array
//1. Printing even numbers in array
const arr1 = [100,200,300,400,505]
{
    const output1= arr1.map(function even(x)
    {
         if(x%2==0)
         {
            return x;

         }
    })
    console.log(output1)
}
//2. program to square the array numbers

const arr2 = [10,20,30,40,50]
const output2 = arr2.map((num,index,array) =>
{
    num = num*num;
    return num;
    
})
console.log(output2);

//3.binary of array value
const arr3 = [1,2,3,4,5,7,6,8]
const output3 = arr3.map((num,index,arr) =>
{
    
    num = num.toString(2)
       return num
})
console.table(output3);

//4.Program to print odd numbers
const arr4 = [1,2,3,5,7,9]
const output4 = arr4.map((num,index,arr) =>
{
    if(num!==2)
    {
        return num;
    }
    else
    return false;
})
console.table(output4);

//5. program to square the array  value
const arr5 =[1,2,3,4,5,6];
const output5 = arr5.map((num,index,arr) =>
{
    for(i=0;i<arr5.length;i++)
    {
        arr5[i] = arr5 [i]* 20;
        return arr5[i];
    }

})
console.table(output5);
