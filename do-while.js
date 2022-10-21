/* syntax
do
{
    statements;
}
while(condition)
{
    statements;
}*/
let c = 1;
do{
console.log(c);
c++;
}
while(c<10)
{
    console.log(c);
}

let arr = [1,2,3,4,5];
let a = 0;
 do
 {
   console.log(arr[a]);
arr[a] =arr[a]+2;
    a++;

 }
while(a<=5)
{
    console.log(arr);
}
