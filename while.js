/*syntax
while(condition)
{
    statements;
}*/
const arr = [1,2,3,4,5];
let a = 0;
while(a<5)
{
    console.log(arr[a]);
    arr[a] = arr[a] + 2;
    a= a+1;
}
console.log(arr);