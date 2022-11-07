// program on reduce method
//
//1. 
const arr1 = [1,2,3,5]
const result1 = arr1.reduce((preNum,currNum,index,arr1)=>
{
    console.log(preNum,currNum)
     return preNum*currNum;

})
console.log(result1);

//2.
const arr2 = [10,20,30,40,50]
const result2 = arr2.reduce((preNum,currNum,index,arr2)=>
{
    
    
        console.log(preNum,currNum);
    
        return currNum/preNum;
    
})
console.table(result2);

//3.
const arr3 = [100,150,200,300,400]
const result3 =arr3.reduce((preNum,currNum,index,arr3)=>
{
    console.log(preNum,currNum);
    return preNum+currNum;
})
console.table(result3);
//4
const arr4 = [686,66,5,4,33,5,6,98]
const result4 = arr4.reduce((preNum,currNum,index,arr4)=>
{
    console.log(preNum,currNum);
    return preNum+currNum;
})
console.log(result4);

//5
const arr5 = [10,20,34,500,607,890]
const result5 = arr5.reduce((preNum,currNum,index,arr5)=>
{
  if(index<=arr5.length)  
  {
    console.table(currNum*index)
    return currNum*index;
  }
})
console.table(result5);